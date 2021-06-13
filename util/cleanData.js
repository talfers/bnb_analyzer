const cleanData = async (name, neighborhoodId, neighborhoodOverview) => {

    // Grab data from response object and assign to new variables
    const median_price = neighborhoodOverview.median_price;
    const price_per_sqft = neighborhoodOverview.price_per_sqft;
    const airbnb_properties = neighborhoodOverview.num_of_airbnb_properties;
    const traditional_properties = neighborhoodOverview.num_of_traditional_properties;
    const mash_meter = neighborhoodOverview.mashMeter;
    const avg_occupancy = neighborhoodOverview.avg_occupancy;
    const roi_airbnb = neighborhoodOverview.airbnb_rental.roi;
    const roi_traditional = neighborhoodOverview.traditional_rental.roi;
    const cap_rate_airbnb = neighborhoodOverview.airbnb_rental.cap_rate;
    const cap_rate_traditional = neighborhoodOverview.traditional_rental.cap_rate;
    const rental_income_airbnb = neighborhoodOverview.airbnb_rental.rental_income;
    const rental_income_traditional = neighborhoodOverview.traditional_rental.rental_income;
    const night_price_airbnb = neighborhoodOverview.airbnb_rental.night_price;
    const night_price_traditional = neighborhoodOverview.traditional_rental.night_price;
    const occupancy_airbnb = neighborhoodOverview.airbnb_rental.occupancy_airbnb;
    const occupancy_traditional = neighborhoodOverview.traditional_rental.occupancy_traditional;

    // Create object that will be returned and added to the reports
    const reportObj = {
        name,           // name neighborhoodId and beds are going to be included in report
        neighborhoodId,
        median_price,
        price_per_sqft,
        airbnb_properties,
        traditional_properties,
        mash_meter,
        avg_occupancy,
        roi_airbnb,
        roi_traditional,
        cap_rate_airbnb,
        cap_rate_traditional,
        rental_income_airbnb,
        rental_income_traditional,
        night_price_airbnb,
        night_price_traditional,
        occupancy_airbnb,
        occupancy_traditional,
    }

    return reportObj
}

module.exports = cleanData;
