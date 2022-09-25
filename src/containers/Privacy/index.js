import {Fragment} from "react";
import HeaderImage from "images/terms-privacy.svg";

export default function Privacy() {
    return (
        <Fragment>
            <div className="flex relative -mt-40 mb-10 -z-10">
                    <img src={HeaderImage} alt="privacy" className="absolute w-full"/>
            </div>
            <div className="flex justify-center pt-16 mt-40">
                <p className="text-heading-title-sz text-white font-bold">
                    Privacy Policy
                </p>
            </div>

            <div className="flex flex-col justify-around ml-20 mr-20 mt-40 mb-40 text-mini-regular-sz">
                <p className="mt-4 font-bold text-md">Introduction</p>
                <p className="mt-4">These Website Standard Terms and Conditions written on this webpage shall manage
                    your use of our
                    website, passionari accessible at passionari.com.<br/>
                    These Terms will be applied fully and affect your use of this Website. By using this Website, you
                    agreed to accept all terms and conditions written here. You must not use this Website if you
                    disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have
                    been generated with the help of the Terms And Conditions Sample Generator.<br/>
                    Minors or people below 18 years old are not allowed to use this Website.</p>
                <p className="mt-4 font-bold text-md">Intellectual Property Rights</p>
                <p className="mt-4">Other than the content you own, under these Terms, Passion Ai and/or its licensors
                    own all the
                    intellectual property rights and materials contained in this Website.<br/>
                    You are granted a limited licence only for purposes of viewing the material contained on this
                    Website.</p>
                <p className="mt-4 font-bold text-md">Restrictions</p>
                <p className="mt-4">You are specifically restricted from all of the following:</p>
                <ul className="ml-8 mt-2">
                    <li className="list-disc"> Publishing any Website material in any other media.</li>
                    <li className="list-disc">Selling, sublicensing and/or otherwise commercialising any Website material.</li>
                    <li className="list-disc">Publicly performing and/or showing any Website material.</li>
                    <li className="list-disc">Using this Website in any way that is or may be damaging to this Website.</li>
                    <li className="list-disc">Using this Website in any way that impacts user access to this Website.</li>
                    <li className="list-disc">Using this Website contrary to applicable laws and regulations, or in any way may cause harm to
                        the
                        Website, or to any person or business entity.
                    </li>
                    <li className="list-disc">Engaging in any data mining, data harvesting, data extracting or any other similar activity in
                        relation to this Website.
                    </li>
                    <li className="list-disc">Using this Website to engage in any advertising or marketing.</li>
                </ul>
                <p className="mt-2">Certain areas of this Website are restricted from being accessed by you and Passion
                    Ai may further
                    restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user
                    ID and password you may have for this Website are confidential and you must maintain confidentiality
                    as well.</p>
                <p className="mt-4 font-bold text-md">Your Content</p>
                <p className="mt-4">In these Website Standard Terms and Conditions, "Your Content" shall mean any audio,
                    video text,
                    images or other material you choose to display on this Website. By displaying Your Content, you
                    grant Passion Ai a non-exclusive, worldwide irrevocable, sub licensable licence to use, reproduce,
                    adapt, publish, translate and distribute it in any and all media.<br/>
                    Your Content must be your own and must not be invading any third-party’s rights. Passion Ai reserves
                    the right to remove any of Your Content from this Website at any time without notice.</p>
                <p className="mt-4 font-bold text-md">Your Privacy</p>
                <p className="mt-4">Please read Privacy Policy.</p>
                <p className="mt-4 font-bold text-md">No warranties</p>
                <p className="mt-4">This Website is provided "as is," with all faults, and Passion Ai expresses no
                    representations or
                    warranties, of any kind related to this Website or the materials contained on this Website. Also,
                    nothing contained on this Website shall be interpreted as advising you.</p>
                <p className="mt-4 font-bold text-md">Limitation of liability</p>
                <p className="mt-4">In no event shall Passion Ai, nor any of its officers, directors and employees,
                    shall be held liable
                    for anything arising out of or in any way connected with your use of this Website whether such
                    liability is under contract. Passion Ai, including its officers, directors and employees shall not
                    be held liable for any indirect, consequential or special liability arising out of or in any way
                    related to your use of this Website.</p>
                <p className="mt-4 font-bold text-md">Indemnification</p>
                <p className="mt-4">You hereby indemnify to the fullest extent Passion Ai from and against any and/or
                    all liabilities,
                    costs, demands, causes of action, damages and expenses arising in any way related to your breach of
                    any of the provisions of these Terms.</p>
                <p className="mt-4 font-bold text-md">Severability</p>
                <p className="mt-4">If any provision of these Terms is found to be invalid under any applicable law,
                    such provisions
                    shall be deleted without affecting the remaining provisions herein.</p>
                <p className="mt-4 font-bold text-md">Variation of Terms</p>
                <p className="mt-4">Passion Ai is permitted to revise these Terms at any time as it sees fit, and by
                    using this Website
                    you are expected to review these Terms on a regular basis.</p>
                <p className="mt-4 font-bold text-md">Assignment</p>
                <p className="mt-4">The Passion Ai is allowed to assign, transfer, and subcontract its rights and/or
                    obligations under
                    these Terms without any notification. However, you are not allowed to assign, transfer, or
                    subcontract any of your rights and/or obligations under these Terms.</p>
                <p className="mt-4 font-bold text-md">Entire Agreement</p>
                <p className="mt-4">These Terms constitute the entire agreement between Passion Ai and you in relation
                    to your use of
                    this Website, and supersede all prior agreements and understandings.</p>
                <p className="mt-4 font-bold text-md">Governing Law & Jurisdiction</p>
                <p className="mt-4">These Terms will be governed by and interpreted in accordance with the laws of the
                    State of in, and
                    you submit to the non-exclusive jurisdiction of the state and federal courts located in in for the
                    resolution of any disputes.
                    <p className="font-semibold">support@passionaiari.com</p>
                </p>


            </div>
        </Fragment>
    );
}
