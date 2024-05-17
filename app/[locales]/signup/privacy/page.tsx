'use client'
import { RootState } from '@/store/store';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginLogo from "../../../../public/images/login-logo.png";
import { useTranslations } from 'next-intl';
import Button from '../../components/Button';

const Page = () => {
    const {privacy} = useSelector((state: RootState) => state.signUp.data);
    const translate = useTranslations();
    const [loading, setLoading] = useState(false);
    const [scrollBottomReached, setScrollBottomReached] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;
            const scrollPosition = window.scrollY;

            if (documentHeight - scrollPosition <= windowHeight) {
                setScrollBottomReached(true);
            } else {
                setScrollBottomReached(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-gray-100 bg-white flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-8 max-w-3xl w-full">
                <div className="mb-8">
                    <Image
                        src={LoginLogo}
                        alt="Login logo"
                        className="w-72"
                        priority
                    />
                </div>
                <div className='my-10 font-extrabold text-2xl'>
                    {translate("privacy_policy")}
                </div>
                <div className="text-left mb-20">
                    {privacy && (
                        <div dangerouslySetInnerHTML={{ __html: privacy }} />
                    )}
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-center w-full">
                <div className="flex flex-col md:flex-row md:space-x-20">
                    <Button
                        text={translate("decline")}
                        disabled={false}
                        buttonStyle="w-full md:w-32 h-10 rounded-xl bg-gray-300 text-gray-700 border-2 border-gray-200 mb-2"
                        disabledButtonStyle="bg-white text-gray-500"
                        enabledButtonStyle="bg-white text-gray-700"
                        loading={loading}
                        onPress={() => {}}
                    />
                    <Button
                        text={translate("next")}
                        disabled={!scrollBottomReached}
                        buttonStyle="w-full md:w-32 h-10 rounded-xl text-gray-700"
                        disabledButtonStyle="w-full md:w-32 h-10 rounded-xl bg-gray-200 text-gray-700 " 
                        enabledButtonStyle="w-full md:w-32 h-10 rounded-xl bg-blue text-white hover:bg-dark-blue"
                        loading={loading}
                        onPress={() => {}}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;
