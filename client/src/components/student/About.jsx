"use client"
import { assets } from "../../assets/assets"
import Footer from "./Footer"

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-logocolor1 text-white">
        <div className="container px-4 py-20 md:py-32">
          <div className="grid gap-5 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col  mx-25 justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Transforming Education Through Technology
              </h1>
              <p className="text-lg md:text-xl">
              We're on a mission to make learning accessible, engaging, and effective for everyone.
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 font-medium text-logocolor1 shadow-sm hover:bg-gray-100"
                  onClick={() => alert("Welcome! This is a standalone page.")}
                >
                  Get Started
                </button>
                <button
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white px-6 font-medium text-white hover:bg-white hover:text-logocolor1"
                  onClick={() => alert("Contact form would appear here. This is a standalone page.")}
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={assets.aboutusmain_image}
                alt="Learning platform illustration"
                className="rounded-lg"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white mx-25 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
            <div className="mt-4 h-1 w-20 bg-logocolor1 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              At EduLearn, we believe that education is the foundation of progress. Our mission is to create a learning
              platform that empowers educators and inspires students, making quality education accessible to all,
              regardless of geographical or socioeconomic barriers.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "📚",
                title: "Accessible Learning",
                description: "We're committed to making education accessible to everyone, everywhere.",
              },
              {
                icon: "👥",
                title: "Community Focused",
                description: "Building connections between educators and learners to foster collaboration.",
              },
              {
                icon: "🎓",
                title: "Quality Education",
                description: "Delivering high-quality educational content and experiences that inspire.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-logocolor1 mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 mx-25 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet Our Team</h2>
            <div className="mt-4 h-1 w-20 bg-logocolor1 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              Our diverse team of educators, technologists, and learning specialists is passionate about transforming
              education through innovative technology.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "CEO & Founder",
                image: assets.CEO,
                bio: "Former professor with 15+ years in educational technology.",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: assets.employ1,
                bio: "Tech innovator specializing in AI-enhanced learning systems.",
              },
              {
                name: "Dr. Amara Okafor",
                role: "Chief Learning Officer",
                image: assets.CEO,
                bio: "Educational psychologist focused on effective learning methodologies.",
              },
              {
                name: "James Rodriguez",
                role: "Head of Product",
                image: assets.employ1,
                bio: "UX specialist with a passion for creating intuitive learning experiences.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="aspect-square w-full object-cover"
                  width={300}
                  height={300}
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-sm text-logocolor1">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-logocolor1 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "👥", value: "10,000+", label: "Active Users" },
              { icon: "📚", value: "500+", label: "Courses Available" },
              { icon: "🏆", value: "98%", label: "Satisfaction Rate" },
              { icon: "📊", value: "85%", label: "Completion Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-logocolor1 text-2xl">
                  {stat.icon}
                </div>
                <h3 className="mt-4 text-3xl font-bold">{stat.value}</h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Join thousands of educators and learners who are already using our platform to achieve their educational
              goals.
            </p>
            <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                className="inline-flex h-12 items-center justify-center rounded-md bg-logocolor1 px-6 font-medium text-white shadow-sm hover:bg-logocolor1"
                onClick={() => alert("Thank you for your interest! This is a standalone page.")}
              >
                Get Started Today
              </button>
              <button
                className="inline-flex h-12 items-center justify-center rounded-md border border-logocolor1 px-6 font-medium text-logocolor1 hover:bg-blue-50"
                onClick={() => alert("Demo request received! This is a standalone page.")}
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

    </div>
  )
}
