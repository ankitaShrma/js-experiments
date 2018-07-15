/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('categories')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('categories').insert([
          {
            title: 'Office',
            updated_at: new Date()
          },
          {
            title: 'College',
            updated_at: new Date()
          }
        ])
      ]);
    });
}
