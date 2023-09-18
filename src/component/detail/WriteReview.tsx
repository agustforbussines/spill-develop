import OnlineReview from '@/assets/images/OnlineReview.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const WriteReview = () => {
  const router = useRouter()
  return (
    <div className="bg-[#E8FBF5] flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg w-[85%] md:w-auto mx-auto">
      <Image
        src={OnlineReview}
        alt="online-review"
        className="w-[200px] h-[200px] object-contain flex-none"
      />

      <div className="space-y-4">
        <h3 className="font-satoshi text-title-lg font-[700] md:font-[900] tracking-[0.01px]">
          Ingin Tulis Review?
        </h3>

        <p className="text-title-md font-satoshi">
          Yuk bantu menuliskan review untuk membantu pengguna lain menemukan
          produk mereka
        </p>

        <Link
          href={`/review-product/${router.query.id}`}
          className="flex border disabled:hover:border disabled:cursor-not-allowed font-semibold items-center justify-center px-5 h-[50px] rounded-[10px] text-small  leading-low font-satoshi bg-none border-dark text-dark hover:border w-full md:w-[200px]"
        >
          Tulis Review
        </Link>
      </div>
    </div>
  )
}

export default WriteReview
