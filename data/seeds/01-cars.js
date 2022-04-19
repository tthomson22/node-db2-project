// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'Toyota',
        model: 'Prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '2222222222222',
        make: 'Honda',
        model: 'Civic',
        mileage: 107000,
        title: 'clean',
    },
    {
        vin: '3333333333333',
        make: 'Tesla',
        model: 'Y',
        mileage: 1000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}