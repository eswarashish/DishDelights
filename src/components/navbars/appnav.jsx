


import NavigationMenuDemo from "./content"
import { UserMenu } from "./usernav"





const appnav = (props) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between shadow-lg px-6 py-1 z-50 bg-white dark:shadow-blue-500/50 dark:bg-slate-900">
      <NavigationMenuDemo />
      <UserMenu />
    </div>
  );
}

export default appnav