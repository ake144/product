"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log(data)

    setIsLoading(false)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen w-full  bg-[#0a0a14] bg-gradient-to-b from-[#0a0a14] to-[#1a0a2e]  px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg space-y-7">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">

            <span className="text-white">Break </span>
            <span className="text-orange-500">New Frontiers</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Tap into the future of development, now!
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-gray-400">
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="bg-[#1e1e2f] border-[#2e2e3f] text-white placeholder-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-400">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="bg-[#1e1e2f] border-[#2e2e3f] text-white placeholder-gray-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-400">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="min-h-[120px] bg-[#1e1e2f] border-[#2e2e3f] text-white placeholder-gray-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  )
}