import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="bg-black">
                <div className="px-4 sm:px-6 lg:px-16 pt-16 pb-10">
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                        {/* Logo and Description */}
                        <div className="flex flex-col gap-6 lg:w-1/3">
                            <div className="flex items-center gap-2">
                                <Image src="/assets/footer-logo.svg" alt="We5ive Logo" width={50} height={29} />
                                <Link href={`/`} className="font-nunito text-white text-3xl font-bold">
                                    We<span className="text-primary">5</span>ive
                                </Link>
                            </div>
                            <p className="text-white text-sm">
                                Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est.
                            </p>
                        </div>

                        {/* Newsletter Section */}
                        <div className="lg:w-1/3">
                            <h2 className="text-white text-xl font-bold">Sign Up For Our Newsletter!</h2>
                            <p className="text-white text-sm mt-2">
                                Get notified about updates and be the first to get early access to new Podcast episodes.
                            </p>
                            <div className="mt-6">
                                <label className="flex items-center bg-white rounded-md overflow-hidden">
                                    <input
                                        type="email"
                                        className="grow pl-4 py-2 bg-white outline-none text-sm"
                                        placeholder="Your email address"
                                        aria-label="Enter your email address"
                                    />
                                    <button className="bg-primary text-white px-4 py-2 text-sm font-semibold">
                                        Subscribe
                                    </button>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Footer Navigation */}
                    <div className="flex flex-col sm:flex-row justify-between mt-12 gap-8 text-white">
                        {/* Contact Us */}
                        <div>
                            <h6 className="font-bold mb-2">Contact Us</h6>
                            <a href="mailto:support@we5ive.com" className="text-sm hover:underline">
                                support@we5ive.com
                            </a>
                        </div>

                        {/* About Us */}
                        <div>
                            <h6 className="font-bold mb-2">About Us</h6>
                            <a href="#" className="text-sm hover:underline">Contact Us</a>
                        </div>

                        {/* Privacy Policy */}
                        <div>
                            <h6 className="font-bold mb-2">Privacy Policy</h6>
                            <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h6 className="font-bold mb-2">Social Links</h6>
                            <div className="flex gap-4">
                                <a href="#" aria-label="Facebook">
                                    <Image src="/assets/Facebook.png" alt="Facebook" width={24} height={24} />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <Image src="/assets/twiter.png" alt="Twitter" width={24} height={24} />
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <Image src="/assets/linkdin.png" alt="LinkedIn" width={24} height={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="h-14 flex justify-center items-center bg-primary">
                    <p className="text-white text-sm">© 2024 | We5ive</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;