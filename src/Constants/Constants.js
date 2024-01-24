//icons:
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

const theme = {
    palette: {
        background: {
            main: '#09322B',
        },
        background_light: {
            main: '#59DF72',
        },
    },
  };

const pages = ['Bets', 'Bracket', 'News', 'Tables', 'Rules'];

const hebrewTranslations = {
  'Bets': "ההימורים שלי",
  'Bracket': "בראקטס",
  'News': "חדשות וטיפים",
  'Tables': "טבלאות",
  'Rules': " חוקי הפורמט"
};

const tabData = [
    { value: 'bets', icon: <CasinoOutlinedIcon style={{ fontSize: 20 }} /> },
    { value: 'brackets', icon: <AccountTreeOutlinedIcon style={{ fontSize: 20 }} /> },
    { value: 'news', icon: <NewspaperOutlinedIcon style={{ fontSize: 20 }} /> },
    { value: 'tables', icon: <TableChartOutlinedIcon style={{ fontSize: 20 }} /> },
    { value: 'rules', icon: <ReceiptLongOutlinedIcon style={{ fontSize: 20 }} /> },
  ];


const mapFirebaseErrorToUserMessage = (firebaseErrorMessage) => {
  switch (firebaseErrorMessage) {
    case 'Firebase: Error (auth/invalid-credential).':
      return 'Invalid email or password. Please check your credentials.';
    case 'Firebase: Error (auth/invalid-email).':
      return 'Invalid email format. Please enter a valid email address.';
    case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
      return 'Password should be at least 6 characters long.';
    case 'Firebase: Error (auth/email-already-in-use).':
      return 'The email address is already in use. Please use a different email.';
    default:
      return 'An error occurred. Please try again later.';
  }
};

export {
    pages,
    hebrewTranslations,
    tabData,
    mapFirebaseErrorToUserMessage
}