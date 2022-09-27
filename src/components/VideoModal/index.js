// eslint-disable-next-line
import {Fragment, useState} from "react";

export default function VideoModal({showVideo, setVideoModal}) {

    return (
        <Fragment>
            <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="relative w-auto my-6 mx-auto max-w-5xl">

                    <Fragment>
                        <div className="rounded items-center">

                            <div className="flex relative justify-start ml-4 cursor-pointer">
                                <svg
                                    className="z-10 absolute"
                                    width="30"
                                    cursor="pointer"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => setVideoModal(false)}
                                >
                                    <path
                                        d="M19.2 10.8L10.8 19.2M10.8 10.8L19.2 19.2M29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1C22.732 1 29 7.26801 29 15Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <video
                                className="mt-10 rounded-2xl"
                                autoplay="autoplay" controls="controls"
                            >
                                <source
                                    src={`https://passionaiaripro.s3.ap-south-1.amazonaws.com/website/${process.env.REACT_APP_INTRO_VIDEO_NAME}`}
                                    type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Fragment>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </Fragment>
    );
}
