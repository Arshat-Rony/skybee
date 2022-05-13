import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';

const BidModal = ({ bid, setBid }) => {
    const [user] = useAuthState(auth)
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const price = bid.price;
        setBid(null)
        console.log(name, email, price)
    }
    return (
        <div>
            <input type="checkbox" id="bid-modal" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box relative  bg-zinc-800">
                    <label for="bid-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-white">Bid For : {bid.name}</h3>
                    <form onSubmit={handleSubmit} className='flex items-center flex-col space-y-4 pb-5 pt-10'>
                        <input name='email' type="email" value={user?.email || ''} class="input input-bordered w-full max-w-xs bg-zinc-700 text-white" />
                        <input name='name' type="text" value={user?.displayName || ''} class="input input-bordered w-full max-w-xs bg-zinc-700 text-white" />
                        <input name='price' type="text" value={bid.price || ''} class="input input-bordered w-full max-w-xs bg-zinc-700 text-white" />
                        <input type="submit" value="Bid Now" class="input input-bordered w-full max-w-xs bg-secondary text-white hover:bg-gradient-to-r from-accent to-secondary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BidModal;