package code.seat.app;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

public class FirebaseApplication {
    public static void main(String[] args) throws Exception {

        InputStream in = FirebaseApplication.class.getClassLoader().getResourceAsStream("ola-messages-int-25c737671d5c.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(in))
                .build();

        FirebaseApp app = FirebaseApp.initializeApp(options);

        FirebaseMessaging firebaseMessaging = FirebaseMessaging.getInstance(app);

        Message message = Message.builder()
                .setNotification(Notification.builder().setTitle("hi there").setBody("Hows everything").build())
                .putData("score", "850")
                .putData("time", "2:45")
                .setToken(
                   "dL1PTMC0bwzsjdOOV_zUwL:APA91bEjH6O6DTVSh63KUAiGsOxc36pJtaG4QZRMgU-K15Gksf-AJVmmeuwaJwQnLOsHuA_f-tXhfOKpzIPklRHTKRhuHic-dI81rbA09XkiAaqzdquA6ADVxAFXwFgW1jUnLUik-3Qr"
                ).build();

        String msg = firebaseMessaging.send(message);

        System.out.println("Message sent: " + msg);

    }
}
