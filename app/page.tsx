import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src="/hero-bg.jpg"
                    alt="Chrono Kuiper Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Chrono Kuiper
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-200">
                        Advanced temporal tracking and data analytics for the next generation of space exploration.
                    </p>
                    <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                        Get Started
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 bg-gray-50 text-gray-800">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">About Us</h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Founded with a mission to bridge the gap between complex temporal data and actionable insights,
                        Chrono Kuiper specializes in delivering intuitive analytics platforms. We empower Voyager-class
                        missions with real-time tracking, historical mapping, and predictive modeling, ensuring that
                        every moment in space is captured and categorized.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Card 1 */}
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
                            <div className="relative h-48">
                                <Image
                                    src="/feature1.jpg"
                                    alt="Real-time Tracking"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
                                <p className="text-gray-600">
                                    Track objects and anomalies across the Kuiper belt with millisecond precision and
                                    unprecedented accuracy.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
                            <div className="relative h-48">
                                <Image
                                    src="/feature2.jpg"
                                    alt="Neural Analytics"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">Neural Analytics</h3>
                                <p className="text-gray-600">
                                    Integrated machine learning models that identify patterns and predict future
                                    trajectory shifts automatically.
                                </p>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden group">
                            <div className="relative h-48">
                                <Image
                                    src="/feature3.jpg"
                                    alt="Global Sync"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">Global Sync</h3>
                                <p className="text-gray-600">
                                    Seamlessly synchronize your data across all Earth-based control stations and
                                    orbital relays instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 bg-gray-900 text-white">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32"
                                placeholder="How can we help you?"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 transform active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Chrono Kuiper. All rights reserved.</p>
            </footer>
        </div>
    );
}
