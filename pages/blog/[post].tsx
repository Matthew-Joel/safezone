import React from "react";
import {
    LogoFacebook,
    LogoLinkedin,
    LogoTwitter,
    LogoWhatsapp,
    ShareSocialOutline,
} from "react-ionicons";
import Link from "next/link";
import { BlogThumbnailCard } from "../../components/ui/common/cards";



const BlogPostPage = () => {
    return(
        <div className="bg-white relative mx-14 lg:my-40 my-28">
            <div className="blog-header lg:grid lg:grid-cols-2 flex flex-col items-center justify-center">
                <div className="flex justify-center items-center">
                    <img
                        src="/images/hacker-with-laptop-golden-credit-card.png"
                        alt="image"
                        className="h-[300px]"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl mt-6 lg:mt-0 lg:ml-4">5 Tips for Avoiding E-Commerce Scammers</h1>
                    <p className="text-sm mt-4 flex gap-5"><span>
                        Posted on 12/05/23
                    </span>
                    <span>
                        By Darey Oloye
                    </span>
                    </p>
                    <div className="flex flex-row gap-2 mt-12">
                        <Link href="#">
                            <div className="">
                                <ShareSocialOutline color="blue" />
                            </div>
                        </Link>
                        <Link href="#">
                        <div className="">
                            <LogoFacebook color="blue" />
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="">
                            <LogoLinkedin color="dodgerblue" />
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="">
                            <LogoTwitter color="skyblue" />
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="">
                            <LogoWhatsapp color="green" />
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-col-reverse lg:grid lg:grid-cols-2 mt-12">
                <div className="others relative lg:ml-40 lg:w-2/4 mt-8 lg:mt-0">
                    <h2 className="font-medium text-2xl">Other Articles</h2>
                    <BlogThumbnailCard
                        createdAt={"12/03/2023"}
                        createdBy={"Darey Oloye"}
                        description=""
                        link=""
                        imgSrc={"/images/product/young-girl.jpg"}
                        title={"What is safezone"}
                    /><br></br>
                    <BlogThumbnailCard
                        createdAt={"12/03/2023"}
                        createdBy={"Darey Oloye"}
                        description=""
                        link=""
                        imgSrc={"/images/product/young-girl.jpg"}
                        title={"E-Commerce in Africa"}
                    />
                    <Link href="#">
                        <span className="text-sm flex justify-center mt-8">View all</span>
                    </Link>
                </div>
                <div className="post relative">
                    <p className="text-sm">
                        Online shopping has become increasingly popular over the years, but unfortunately, so have e-commerce scammers. These scammers use various tactics to trick shoppers into giving away their personal information or money. To help protect yourself, here are five tips for avoiding e-commerce scammers.
                        <br></br>
                        Shop from Reputable Websites One of the most effective ways to avoid e-commerce scammers is to shop from reputable websites. Stick to well-known online retailers such as Amazon, eBay, and Walmart, which have built a reputation for providing secure shopping experiences. Avoid shopping from unknown websites, as they may be fraudulent.
                        Use a Secure Payment Method When shopping online, always use a secure payment method such as a credit card or PayPal. These payment methods offer protection against fraud, and you can dispute any unauthorized charges. Avoid using wire transfer or cash on delivery, as these payment methods offer no protection against fraud.
                        Look for Secure Connections Before entering any personal or financial information, make sure that the website is secure. Look for the https `&#34` in the URL and the lock icon in the address bar. This indicates that the website has an SSL certificate, which encrypts your information and protects it from hackers.
                        Beware of Phishing Scams Phishing scams are one of the most common forms of e-commerce scams. Scammers send fraudulent emails or text messages that appear to be from reputable companies, such as banks or online retailers. They ask you to click on a link or provide personal information, which they then use to steal your identity or money. Always be cautious of emails or messages that ask for personal information or contain suspicious links.
                        Read Reviews and Ratings Before making a purchase, read reviews and ratings of the product and the seller. Look for feedback from other buyers to determine the sellers reliability and the quality of the product. Be cautious of sellers with no ratings or reviews or those with negative feedback.
                        <br></br>
                        In conclusion, online shopping can be convenient and enjoyable, but its important to be cautious to avoid falling victim to e-commerce scams. By shopping from reputable websites, using secure payment methods, looking for secure connections, being aware of phishing scams, and reading reviews and ratings, you can protect yourself from online fraud. Remember, always be cautious when shopping online, and if something seems too good to be true, it probably is.
                    </p>
                    <p className="text-sm mt-8">Share this post</p>
                    <div className="flex gap-2  mt-2">
                        <Link href="#">
                            <div className="">
                                <ShareSocialOutline color="blue" />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="">
                                <LogoFacebook color="blue" />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="">
                                <LogoLinkedin color="dodgerblue" />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="">
                                <LogoTwitter color="skyblue" />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="">
                                <LogoWhatsapp color="green" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogPostPage;