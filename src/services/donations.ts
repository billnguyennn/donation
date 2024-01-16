import {Knex} from 'knex';
import db from "../models/db";
import {Donations} from "../models/models/donations";



type INewDonation = Omit<Donations, 'id' | 'date'>;
export async function addNewDonations({d}: {d: INewDonation}){
    const query = db<Donations>;
    const addDonations = await query.insert({
        ...d,
        // id: generateID(),
        date: new Date()
    }).returning('*');

    return addDonations[0];
}