
import AuthContainer from '@/components/auth/AuthContainer'
import CitiesList from '@/components/cities-list/CitiesList'
import Footer from '@/components/footer/Footer'
import NavBar from '@/components/nav-bar/NavBar'
import { ProductList } from '@/components/prodecxt-list/ProdecxtList'


export default function Home() {
  return (
<>
<NavBar/>
<AuthContainer/>
<CitiesList/>
<ProductList/>
<Footer/>
</>  )
}
