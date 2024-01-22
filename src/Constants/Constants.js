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

export {
    pages,
    hebrewTranslations,
    tabData,
}