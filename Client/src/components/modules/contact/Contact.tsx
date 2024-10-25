"use client";
import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    subject: "Want to communicate",
    message: "",
    reply_to: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log('Form submitted:', formData);
    await emailjs
      .send(
        "service_baydzva",
        "template_0y4sa3m",
        formData,
        "BUNP8XV4xpWyNkcmD"
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully.");
          setFormData({
            from_name: "",
            to_name: "",
            subject: "Want to communicate",
            message: "",
            reply_to: "",
          });
        },
        () => {
          toast.error("Sending Failed");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-center" id="contact">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-gray-600 dark:text-[#b2b5ba] mb-4">
        Let&apos;s build something amazing together! Feel free to reach out to
        me if you have a project in mind or want to collaborate.
      </p>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-2">
        <Button
          color="success"
          startContent={<Send className="w-4 h-4" />}
          variant="light"
        >
          (880) 1575632219
        </Button>
        <Button
          color="success"
          startContent={<Send className="w-4 h-4" />}
          variant="light"
        >
          h.r.sihab155@gmail.com
        </Button>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mb-4">
        <Button isIconOnly aria-label="LinkedIn" variant="light">
          <a
            href="https://www.linkedin.com/in/habiburrahman153/"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
          </a>
        </Button>
        <Button isIconOnly aria-label="Github" variant="light">
          <a
            href="https://github.com/habib-153"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub Profile"
          >
            <FaGithub className="w-5 h-5 light:text-[#171515]" />
          </a>
        </Button>
      </div>

      {/* Contact Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            isRequired
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default-50/20",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default-50/30",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default-50/20",
                "!cursor-text",
              ],
            }}
            color="success"
            label="Name"
            name="from_name"
            placeholder="Enter your name"
            radius="sm"
            type="text"
            value={formData.from_name}
            variant="bordered"
            onChange={handleChange}
          />
          <Input
            isRequired
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default-50/20",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default-50/30",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default-50/20",
                "!cursor-text",
              ],
            }}
            color="success"
            label="Email"
            name="reply_to"
            placeholder="Enter your email"
            radius="sm"
            type="email"
            value={formData.reply_to}
            variant="bordered"
            onChange={handleChange}
          />
        </div>
        <Textarea
          isRequired
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default-50/20",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default-50/30",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default-50/20",
              "!cursor-text",
            ],
          }}
          color="success"
          label="Message"
          minRows={6}
          name="message"
          placeholder="Enter your message"
          radius="sm"
          value={formData.message}
          variant="bordered"
          onChange={handleChange}
        />
        <Button
          className="w-full"
          color="success"
          endContent={<Send className="w-4 h-4" />}
          size="lg"
          type="submit"
          variant="shadow"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default ContactSection;
