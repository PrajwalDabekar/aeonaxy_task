import React from "react";
import CustomDropdown from "./CustomDropdown";
import CustomCheck from "./CustomCheck";
import { Link } from "react-router-dom";

function Moreinfo() {
    return(
        <div className="flex flex-col justify-center items-center w-full p-3">
            <div className="flex w-full justify-end">
                <Link to='/help'
                className="flex px-6 py-2 bg-black text-white rounded-md font-semibold hover:underline sm:fixed sm:right-7 sm:top-1/2"
                ><div>Help</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="ml-2"
                    >                   
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="8" />
                    </svg>
                </Link>
            </div>
        <div className="flex flex-col justify-center items-center font-serif py-6 space-y-4 text-center">
            <div className="text-3xl mt-6">Tell us a little more about your self</div>
            <div className="">Your answer will help us build an experience to match your need.</div>
            </div>
            
            <div className="space-y-8 px-2">
            <div className="space-y-8">
                <CustomDropdown
                label="Do you currently run an online business?"
                options={['Yes, I run a successful online business.','Yes, I am in the process of starting one.','No, I do not run an online business currently','No, but I have in the past']}
                />
                <CustomDropdown
                label="I primarly identify as a:"
                options={['Freelancer','Entrepreneur','Consultant','Student']}
                />
                <CustomDropdown
                label="Are you already teaching or offering content online?"
                options={['Yes, I am actively teaching online courses.','Yes, I offer digital content such as tutorials, webinars, or e-books.','Yes, I occasionally provide online teaching or content.','No, but I am interested in starting.','No, I do not currently teach or offer content online.','No, and I have no plans to do so in the future.']}
                />
                <CustomDropdown
                label="How big is your current audience(email list,social media followers,subscribers.etc.)?"
                options={['Less than 100','100 - 500','501 - 1,000','1,001 - 5,000','5,001 - 10,000','10,001 - 50,000','50,001 - 100,000','More than 100,000']}
                />
                <CustomDropdown
                label="Which topic is more relevent to your business or content?"
                options={['Technology and Innovation','Business and Entrepreneurship','Finance and Investment','Education and Learning','Lifestyle and Personal Development','Travel and Adventure','Entertainment and Media']}
                />
                <CustomDropdown
                label="Approximately how much money do you you make charging for your knowledge today(in courses,consulting,books,speaking,etc.)? We ask this so that we can provide you with relevant resources for the size and stage of your business."
                options={['Less than $1,000 per year','$1,000 - $5,000 per year','$5,001 - $10,000 per year','$10,001 - $25,000 per year','$25,001 - $50,000 per year','$50,001 - $100,000 per year','More than $100,000 per year']}
                />
            </div>
            <div>
                <CustomCheck
                question="What are you hoping to do first on Teacable?(Select up to 3 to get started as quickly as possible)"
                options={['Create an online course','Create a coaching program','Create a digital download (ebook,artcle,template,worksheet,etc.)','Create a community or forum','Create a pre-sell',"I'm not sure yet",'Something else (please tell us more)']}
                />
            </div>
            <div>
                <CustomDropdown
                label="How much content or training material(videos,worksheets,downloads,etc.) have you already prepared?"
                options={['None','A few pieces','Several pieces','A significant amount','Extensive library']}
                />
            </div>
            
            <div className="flex justify-end w-[320px] pb-8 sm:w-full">
                
                <Link to='/'
                className="px-8 py-2 border-2 border-black rounded-md hover:underline"
                >Next</Link>
            </div>
            
            </div>
            
        </div>
    )
}
export default Moreinfo