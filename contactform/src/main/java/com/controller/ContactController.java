package com.controller;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Properties;

@Controller
public class ContactController {

    private final String YOUR_EMAIL = "tarditox@gmail.com"; 
    private final String APP_PASSWORD = "pyoy zwly dgse evbv"; 

    @PostMapping("/send")
    public String sendEmail(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("message") String message,
            RedirectAttributes redirectAttributes
    ) {
        try {
            Properties props = new Properties();
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");

            Session session = Session.getInstance(props, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(YOUR_EMAIL, APP_PASSWORD);
                }
            });

            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(YOUR_EMAIL));
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(YOUR_EMAIL));
            msg.setSubject("Nuevo mensaje desde tu web");
            msg.setText("Nombre: " + name + "\nEmail: " + email + "\nMensaje: " + message);

            Transport.send(msg);

            redirectAttributes.addFlashAttribute("success", "Mensaje enviado con éxito!");
        } catch (Exception e) {
            e.printStackTrace();
            redirectAttributes.addFlashAttribute("error", "Error al enviar el mensaje.");
        }

        return "redirect:/";
    }
}
