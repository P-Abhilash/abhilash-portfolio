import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { useState } from "react";

export function Contact() {
  const [isSending, setIsSending] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I’m always open to new opportunities, collaborations, and innovative
            projects. Feel free to reach out to discuss how I can contribute to
            your next venture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Email</h4>
                    <p className="text-muted-foreground">
                      abhilash01289@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Phone</h4>
                    <p className="text-muted-foreground">+1 (872) 310-9765</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Location</h4>
                    <p className="text-muted-foreground">
                      Available for Remote Work
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;

                  if (isSending) return; // 🚫 Prevents double clicks
                  setIsSending(true);

                  emailjs
                    .sendForm(
                      "service_0o9hjfl",
                      "template_gyjayaa",
                      form,
                      "F-Vp80zOSTaDIgjsp"
                    )
                    .then(
                      () => {
                        toast.success("Message sent successfully!");
                        form.reset();
                      },
                      (error) => {
                        toast.error(
                          "Failed to send message. Please try again."
                        );
                        console.error("EmailJS Error:", error);
                      }
                    )
                    .finally(() => {
                      setIsSending(false); // ✅ Re-enable after complete
                    });
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" required />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <Input name="subject" placeholder="Subject" required />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
