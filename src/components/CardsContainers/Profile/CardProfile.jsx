import React from 'react';
import SubCard from './SubCard';
import img from '../../../assets/logo.png';

const CardProfile = ({ user }) => {
    return (
        <div className="rounded-xl bg-white mx-32 py-8 px-12 ">
            <div className="flex gap-2 mb-10">
                <span className="w-1.5 bg-purplePrimary rounded-full"></span>
                <span>Aluno</span>
            </div>

            <div className="flex items-center gap-16">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="30.25"
                    viewBox="0 0 448 512"
                >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>

                <div className="">
                    <p className="text-xl">{user}</p>

                    <div className="flex gap-16 mt-4">
                        <SubCard />
                        <SubCard />
                        <SubCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProfile;