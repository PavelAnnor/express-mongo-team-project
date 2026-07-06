import express from 'express';
const router = express.Router();
import { getAllListings, getListingById, createListing, updateListing, deleteListing } from '../controllers/listingsAndReviews.js';

router.get('/', getAllListings);


router.get('/:id', getListingById);


router.post('/', createListing);


router.put('/:id', updateListing);

router.delete('/:id', deleteListing);

export default router;