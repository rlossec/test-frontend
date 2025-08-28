export const UsageAnalytics = () => {
  // TODO :
  //   - User Adoption Rates: Par outil avec trends                   ✅ NB active_users_count / total users
  //       - Endpoint(s) : GET tools
  //   - Most/Least Used Tools: Ranking avec mini charts              ✅
  //       - Endpoint(s) : GET tools
  //   - Department Activity: Comparaisons visuelles                  ❌
  //       - Endpoint(s) : GET users?_embed=department ?              Pas de données pertinentes
  //   - Growth Trends: Timeline des nouveaux outils                  Timeline ?
  //       - Endpoint(s) : GET users/1/user_tools

  return (
    <section className="grid gap-6">
      <h2 className="text-xl font-semibold">📊 Usage Analytics</h2>
      <div className="">
        {/* <UserAdoptionRates />
        <MostLeastUsedTools />
        <DepartmentActivity />
        <GrowthTrends /> */}
      </div>
    </section>
  );
};
