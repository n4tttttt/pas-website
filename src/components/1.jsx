import product from '../images/products.png'
export default function one(){
    return (
    <>
    <div className='text'>    
        <h1 className='title'>REMAJA</h1>
        <h1 className='title2'>GEN Z</h1>
        <h1 className='title3'>ECO 🍃 TUMBLER</h1>
        <h1 className='banner' id='aaaaa'>Bawa Gaya, Jaga Bumi!❤️</h1>
        <h1 className='banner' id='aaaaaa'>YUK, PILIH PRODUK KREATIF YANG PEDULI!❤️</h1>
    </div>
    <div className='paragraph'>Tumbler Stylish & Praktis dari bahan ramah lingkungan. dingin tahan lama, desain kekinian, cocok untuk aktivitas sekolah, kuliah, hangout, sampai ngonten!</div>
    
    <img src={product} alt='product.png' className='image'/>
    <div className='cardcontainer'>
        <h1 className='card' id='one'>BPA FREE</h1>
        <h1 className='card' id='two'>TAHAN DINGIN 12 JAM</h1>
        <h1 className='card' id='three'>DESAIN KECE & UNIK</h1>
        <h1 className='card' id='four'>REUSABLE 100% GO GREEN</h1>
    </div>
    <div className='text1'>
        <h1 id='a' >KREATIF</h1>
        <h1 id='b' >KEKINIAN</h1>
        <h1 id='c' >BERMANFAAT</h1>
    </div>
    <div className='pricetag'>
        <div>Harga Mulai</div>
        <div className='price'>
            <h1>Rp 89.000</h1>
        </div>
    </div>
    <div className='prompt'>
        <h1>BELI SEKARANG!</h1>
        <h2>Stok Terbatas! Jangan Sampai Kehabisan!</h2>
        <h2>MEDIA PEMBELIAN</h2>
    </div>
    <div className='sos'>
        <a href="https://www.instagram.com" id='aa'>@ecotumbler.id</a>
        <a href="https://shopee.co.id" id='aaa'>eco.tumbler_official</a>
        <a href="https://web.whatsapp.com" id='aaaa'>0846-7456-0122</a>
    </div>
    </>
    )
}