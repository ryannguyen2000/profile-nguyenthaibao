/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Code, Briefcase, Award, Rocket, Users, Database, Cpu, MessageCircle, X, Send } from 'lucide-react';

export default function GamingCV() {
    const [particles, setParticles] = useState<any>([]);
    const [showContact, setShowContact] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10
        }));
        setParticles(newParticles);
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const subject = encodeURIComponent(`CV Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:nguyenthaibao.haugiang@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setTimeout(() => {
            setShowContact(false);
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
            {/* Animated Background Particles */}
            {particles.map((particle: any) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-purple-400 opacity-20 animate-pulse"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animation: `float ${particle.duration}s infinite ease-in-out`
                    }}
                />
            ))}

            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
                {/* Header Section with Glowing Effect */}
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="inline-block mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-purple-500 blur-3xl opacity-50 animate-pulse" />
                            <h1 className="relative text-6xl md:text-8xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                                NGUYEN THAI BAO
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px w-16 bg-linear-to-r from-transparent to-cyan-400" />
                        <p className="text-2xl md:text-3xl text-cyan-300 font-light tracking-widest uppercase">
                            Fullstack Developer
                        </p>
                        <div className="h-px w-16 bg-linear-to-l from-transparent to-cyan-400" />
                    </div>

                    {/* Contact Info with Icons */}
                    <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                        <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500 transition-all">
                            <Mail size={18} className="text-cyan-400" />
                            <span>nguyenthaibao.haugiang@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500 transition-all">
                            <Phone size={18} className="text-cyan-400" />
                            <span>0906174076</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-purple-500/30 hover:border-purple-500 transition-all">
                            <MapPin size={18} className="text-cyan-400" />
                            <span>Can Tho, Vietnam</span>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { icon: Code, label: 'Front-end Exp', value: '3+ Years' },
                        { icon: Database, label: 'Fullstack Exp', value: '1 Year' },
                        { icon: Users, label: 'Team Size', value: '3-4 Members' },
                        { icon: Rocket, label: 'Projects', value: '10+' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 text-center hover:border-cyan-400 transition-all hover:scale-105 animate-slideUp" style={{ animationDelay: `${idx * 100}ms` }}>
                            <stat.icon className="mx-auto mb-3 text-cyan-400" size={32} />
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column - Skills */}
                    <div className="space-y-6">
                        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="text-cyan-400" size={24} />
                                <h2 className="text-2xl font-bold text-white">TECH STACK</h2>
                            </div>

                            {[
                                { category: 'Front-end', skills: ['ReactJS', 'Next.js', 'TypeScript', 'Redux', 'Zustand'] },
                                { category: 'Back-end', skills: ['Node.js', 'Express', 'NestJS', 'MongoDB'] },
                                { category: 'DevOps', skills: ['GitHub API', 'Vercel', 'CI/CD'] }
                            ].map((group, idx) => (
                                <div key={idx} className="mb-6">
                                    <h3 className="text-cyan-400 font-bold mb-3 uppercase tracking-wider text-sm">{group.category}</h3>
                                    <div className="space-y-2">
                                        {group.skills.map((skill, i) => (
                                            <div key={i} className="bg-purple-900/30 rounded-lg p-2 border border-purple-500/20 hover:border-purple-500 transition-all hover:translate-x-2">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-200">{skill}</span>
                                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Award className="text-cyan-400" size={24} />
                                EDUCATION
                            </h2>
                            <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20">
                                <h3 className="text-cyan-400 font-bold">Tay Do University</h3>
                                <p className="text-gray-400">2018 - 2022</p>
                                <p className="text-gray-300">Bachelor&apos;s Degree</p>
                            </div>
                        </div>

                        {/* Personal Traits */}
                        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-4">ATTRIBUTES</h2>
                            <div className="flex flex-wrap gap-2">
                                {['Enthusiastic', 'Fast Learner', 'Art Lover', 'Sports', 'Team Player'].map((trait, i) => (
                                    <span key={i} className="px-3 py-1 bg-linear-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm hover:scale-110 transition-transform">
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Experience */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Summary */}
                        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-4">PROFESSIONAL PROFILE</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Fullstack Developer with over 3 years of specialized Front-end experience and nearly 1 year of comprehensive Fullstack development. Proven expertise in project management, team leadership, and delivering end-to-end technology solutions spanning Front-end, Back-end, and DevOps.
                            </p>
                        </div>

                        {/* Featured Project */}
                        <div className="bg-linear-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-md border-2 border-cyan-400/50 rounded-xl p-6 hover:border-cyan-400 transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <Rocket className="text-cyan-400 animate-bounce" size={28} />
                                    <h2 className="text-3xl font-bold text-white">XSTUDIO</h2>
                                    <span className="px-3 py-1 bg-cyan-400/20 border border-cyan-400 rounded-full text-cyan-300 text-xs uppercase">Featured</span>
                                </div>
                                <p className="text-cyan-100 mb-4 text-lg">No-Code/Low-Code Web Design Platform</p>
                                <div className="space-y-3">
                                    {[
                                        'Auto source generation & Vercel deployment',
                                        'Drag-and-drop interface with action logic',
                                        'AI-powered custom components & functions',
                                        'Marketplace for templates & components',
                                        'Flexible file management system'
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-gray-200">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-cyan-400" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-cyan-400/30">
                                    <span className="text-cyan-400 font-bold">Role:</span>
                                    <span className="text-gray-200 ml-2">Team Lead & Fullstack Developer</span>
                                </div>
                            </div>
                        </div>

                        {/* Experience Timeline */}
                        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <Briefcase className="text-cyan-400" size={24} />
                                <h2 className="text-2xl font-bold text-white">EXPERIENCE</h2>
                            </div>

                            <div className="space-y-6 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-linear-to-b before:from-cyan-400 before:via-purple-400 before:to-pink-400">
                                {[
                                    {
                                        title: 'Team Lead - Fullstack Developer',
                                        company: 'E-commerce & Software Company',
                                        period: 'Present',
                                        highlights: [
                                            'Lead team of 3-4 developers',
                                            'Manage full development lifecycle',
                                            'Build CI/CD pipelines',
                                            'GitHub & Vercel API integration'
                                        ]
                                    },
                                    {
                                        title: 'Front-end Developer',
                                        company: 'Hotel Chain CMS',
                                        highlights: [
                                            'Built accounting & customer service modules',
                                            'Enhanced existing CMS features',
                                            'ReactJS & API integration'
                                        ]
                                    },
                                    {
                                        title: 'Front-end Developer',
                                        company: 'Blockchain Company',
                                        highlights: [
                                            'Web3 & Smart Contract integration',
                                            'Employee of the Quarter 🏆',
                                            'Promoted from intern to full-time'
                                        ]
                                    }
                                ].map((exp, idx) => (
                                    <div key={idx} className="pl-8 relative">
                                        <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-cyan-400 border-4 border-gray-900 animate-pulse" />
                                        <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500 transition-all">
                                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                            <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                                            {exp.period && <p className="text-gray-400 text-sm mb-3">{exp.period}</p>}
                                            <ul className="space-y-2">
                                                {exp.highlights.map((item, i) => (
                                                    <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                                        <span className="text-cyan-400 mt-1">▸</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Contact Button */}
            <button
                onClick={() => setShowContact(true)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-linear-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white/20 z-50 animate-bounce"
            >
                <MessageCircle size={28} className="text-white" />
            </button>

            {/* Contact Modal */}
            {showContact && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-linear-to-br from-gray-900 to-purple-900 rounded-2xl border-2 border-cyan-400 p-8 max-w-md w-full relative animate-slideUp shadow-2xl">
                        <button
                            onClick={() => setShowContact(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <MessageCircle className="text-cyan-400" />
                            Get In Touch
                        </h2>

                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                    <Send className="text-white" size={32} />
                                </div>
                                <p className="text-white text-xl">Message Sent!</p>
                                <p className="text-gray-400 mt-2">I&apos;ll get back to you soon.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-black/40 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all resize-none"
                                    />
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-linear-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
        </div>
    );
}