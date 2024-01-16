import { Request, Response } from 'express';
import {addNewDonations} from "../services/donations";


export async function donationRegistrationHandler(req: Request, res: Response){

    const { type, donorName, quantity } = req.body;
    try {
        const newDonationRegistration = await addNewDonations({
            d: {
                type,
                donorName,
                quantity
            }
        });
        return res.status(201).json({message: 'successfully created'})
    }catch(err){
        console.log(err);
        return res.status(400).json({message: 'error while adding'})
    }

}