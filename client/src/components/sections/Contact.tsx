import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  const handleSubmit = (data: FormData) => {
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="/titanlogo.png" 
              alt="Titan AutoGate Repairs" 
              className="h-16 w-auto mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Need assistance with your automatic gate? We're here to help!
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block mb-2 font-medium">Name</label>
                      <Input 
                        {...form.register("name")} 
                        placeholder="Your name"
                      />
                      {form.formState.errors.name && (
                        <p className="mt-1 text-sm text-red-500">{form.formState.errors.name.message}</p>
                      )}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block mb-2 font-medium">Phone</label>
                      <Input 
                        {...form.register("phone")}
                        type="tel" 
                        placeholder="Your phone number"
                      />
                      {form.formState.errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{form.formState.errors.phone.message}</p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block mb-2 font-medium">Email</label>
                    <Input 
                      {...form.register("email")}
                      type="email" 
                      placeholder="Your email"
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-500">{form.formState.errors.email.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block mb-2 font-medium">Service Type</label>
                    <Select
                      value={form.watch("serviceType")}
                      onValueChange={(value) => {
                        form.setValue("serviceType", value, {
                          shouldValidate: true
                        });
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sliding">Sliding Gate Service</SelectItem>
                        <SelectItem value="swing">Swing Gate Service</SelectItem>
                        <SelectItem value="remote">Remote & Access Control</SelectItem>
                        <SelectItem value="emergency">Emergency Repair</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.serviceType && (
                      <p className="mt-1 text-sm text-red-500">{form.formState.errors.serviceType.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block mb-2 font-medium">Message</label>
                    <Textarea 
                      {...form.register("message")}
                      placeholder="Please describe your gate issue or service needs" 
                      className="min-h-[120px]"
                    />
                    {form.formState.errors.message && (
                      <p className="mt-1 text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}