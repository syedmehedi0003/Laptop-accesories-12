import React from 'react';

const ContactUs = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <div class="text-center lg:text-left ">
                    <h1 class="text-5xl font-bold text-primary ">Get In Touc</h1>
                    <p class="py-6 text-lg">You can share your opinion and send your feedback. We are trying to improve our services. Please stay with us.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" class="input input-bordered" />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="Message" class="input input-bordered" />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-outline btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;