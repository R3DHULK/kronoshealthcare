"use client"

import type React from "react"

import { useState } from "react"
import { Star, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WriteReviewSection() {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [reviewData, setReviewData] = useState({
    name: "",
    service: "",
    review: "",
  })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    const reviewMessage = `New Review from ${reviewData.name}:
Service: ${reviewData.service}
Rating: ${rating}/5 stars
Review: ${reviewData.review}`

    // For now, we'll send it via WhatsApp
    const encodedMessage = encodeURIComponent(reviewMessage)
    window.open(`https://wa.me/919330747369?text=${encodedMessage}`, "_blank")

    // Reset form
    setShowReviewForm(false)
    setRating(0)
    setReviewData({ name: "", service: "", review: "" })

    // Show success message (you could use a toast notification here)
    alert("Thank you for your review! We appreciate your feedback.")
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Share Your Experience</h2>
          <p className="text-gray-700 mb-8">
            Your feedback helps us improve our services and helps other patients make informed decisions
          </p>

          {!showReviewForm ? (
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
                onClick={() => setShowReviewForm(true)}
              >
                <MessageSquare className="mr-2" size={20} />
                Write a Review
              </Button>

              <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <span>⭐ Rate our services</span>
                <span>💬 Share your experience</span>
                <span>🤝 Help others choose us</span>
              </div>
            </div>
          ) : (
            <Card className="glass-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center justify-center">
                  <Star className="text-yellow-500 mr-2" size={24} />
                  Write Your Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={reviewData.name}
                        onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Used *</label>
                      <select
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={reviewData.service}
                        onChange={(e) => setReviewData({ ...reviewData, service: e.target.value })}
                      >
                        <option value="">Select a service</option>
                        <option value="Eye Care">Eye Care</option>
                        <option value="Dental Services">Dental Services</option>
                        <option value="General Physician">General Physician</option>
                        <option value="General Checkup">General Checkup</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="focus:outline-none"
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setRating(star)}
                        >
                          <Star
                            size={32}
                            className={`${
                              star <= (hoveredRating || rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Review *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      value={reviewData.review}
                      onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                      placeholder="Share your experience with our services..."
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      disabled={!rating || !reviewData.name || !reviewData.service || !reviewData.review}
                    >
                      <Send className="mr-2" size={16} />
                      Submit Review
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      onClick={() => {
                        setShowReviewForm(false)
                        setRating(0)
                        setReviewData({ name: "", service: "", review: "" })
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-12 text-center glass-card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Other Ways to Leave a Review</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() =>
                window.open("https://www.google.com/search?q=Kronos+Health+Care+Foundation+Barasat", "_blank")
              }
            >
              Google Reviews
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() => window.open("https://facebook.com/kronoshealthcare", "_blank")}
            >
              Facebook Reviews
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              onClick={() =>
                window.open(
                  "https://wa.me/919330747369?text=I would like to leave a review for Kronos Health Care Foundation",
                  "_blank",
                )
              }
            >
              WhatsApp Feedback
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
