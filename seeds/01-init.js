exports.seed = function (knex) {
  const department = [
    {
      name: "financeDepartment",
    },
    {
      name: "inSales",
    },
  ];

  return knex("department")
    .insert(department)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};
