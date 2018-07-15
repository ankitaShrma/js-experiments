/**
 * Seed users table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('todos')
    .del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('todos').insert([
          {
            title: 'Learn nodejs',
            updated_at: new Date(),
            details: 'Non blocking',
            user_id: 7

          },
          {
            title: 'Learn reactjs',
            updated_at: new Date(),
            details: 'Front-end framework',
            user_id: 7
          }
        ])
      ]);
    });
}
