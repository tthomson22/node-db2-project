// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'Toyota',
        model: 'Prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '22222222222222222',
        make: 'Honda',
        model: 'Civic',
        mileage: 107000,
        title: 'clean',
    },
    {
        vin: '33333333333333333',
        make: 'Tesla',
        model: 'Y',
        mileage: 1000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}