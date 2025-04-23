"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Review {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    content:
      "This product has completely transformed our workflow. The intuitive interface and powerful features have saved us countless hours of work and improved our team&quots productivity by 35%.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "InnovateSoft",
    content:
      "As a developer, I appreciate the clean architecture and excellent documentation. Integration was seamless and the support team is incredibly responsive. Best technical solution we&quotve implemented this year.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    company: "Craft & Create",
    content:
      "This solution has been a game-changer for my small business. The pricing is fair and the ROI has been tremendous in just a few months. I&quotve seen a 40% increase in customer engagement.",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    company: "FutureTech",
    content:
      "We evaluated several options and this was by far the most comprehensive. The analytics dashboard alone has provided invaluable insights for our team, helping us make data-driven decisions with confidence.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Jessica Patel",
    role: "UX Designer",
    company: "DesignForward",
    content:
      "The attention to detail in this product is remarkable. As a designer, I can tell that user experience was a top priority in development. It&quots rare to find such a thoughtful and well-crafted solution.",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "CTO",
    company: "Enterprise Solutions",
    content:
      "Security and scalability were our main concerns, and this solution has exceeded our expectations on both fronts. Highly recommended for enterprise use. Implementation was smooth and our team adopted it quickly.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="flex-none w-[320px] md:w-[400px] bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mx-4 my-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-full opacity-70"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-full opacity-70"></div>

      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-purple-200 dark:text-purple-700 opacity-30 group-hover:opacity-60 transition-opacity">
        <Quote size={32} />
      </div>

      <div className="flex items-center mb-6 relative">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white dark:border-gray-700 shadow-md">
          <Image
            src={review.avatar || "/placeholder.svg"}
            alt={`${review.name} avatar`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">{review.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
          <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">{review.company}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < review.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700",
            )}
          />
        ))}
      </div>

      <p className="text-gray-950 font-medium text-base leading-relaxed whitespace-pre-line mt-4 px-4 text-center">&quot{review.content}&quot</p>
    </div>
  )
}

export default function ReviewSection() {
  const [scrollSpeed, setScrollSpeed] = useState(4)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.animationPlayState = "paused"
    }
  }

  const handleMouseLeave = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.animationPlayState = "running"
    }
  }

  // Adjust scroll speed based on screen width
  useEffect(() => {
    const handleResize = () => {
      setScrollSpeed(4);
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="py-0 mb-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their workflow with our solution.
          </p>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollContainerRef}
          className="flex whitespace-nowrap"
          style={{
            animation: `scroll ${35 / scrollSpeed}s linear infinite`,
          }}
        >
          {/* First set of reviews */}
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          {/* Duplicate set for seamless looping */}
          {reviews.map((review) => (
            <ReviewCard key={`dup-${review.id}`} review={review} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-5 text-center">
        <div className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer">
          <span className="mr-2">View all 200+ reviews</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
