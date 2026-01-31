router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if ((to.path === "/login" || to.path === "/signup") && user) {
    const redirectPath = user.role === "admin" ? "/dashboard" : "/blog";
    return next(redirectPath);
  }

  next();
});
