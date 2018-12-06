
const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);
const csDrawerIcon = ({ tintColor }) => getDrawerIcon('user-md', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Users', Colors.primary, 'white', userDrawerIcon);
const csNavOptions = getDrawerNavigationOptions('Customer Service', Colors.primary, 'white', csDrawerIcon);


 const DrawerIcon = [
    homeNavOptions,userDrawerIcon,cs
 ]

export default DrawerIcon