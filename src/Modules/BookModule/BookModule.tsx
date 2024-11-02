import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import FeaturedBookCard from '../FeaturedBookCard/FeaturedBookCard';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAllBooks } from '../Books/Books';
import { Oval } from 'react-loader-spinner';



interface Book {
  name: string;
  author: string;
  description: string;
  price: number;
  image: string;
}

export default function BookModule() {
  const [bookData, setBookData] = useState<Book[]>([]);
  const { data: booksFetched, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await getAllBooks();
      setBookData(response.data.data);
      return response;
    },
  });
  console.log(booksFetched);

  return (
    <section className="flex items-center space-x bg-custom-gradient">
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        className="mb-8 w-full relative"
      >
        <button
          className="swiper-featurebook-prev w-10 h-10 bg-white rounded-full items-center justify-center shadow-md text-[#ED553B] hover:text-white transition-colors border-[1px] border-[#ED553B] absolute left-5 top-1/2 transform -translate-y-1/2 z-50 md:flex hidden"
        >
          <MoveLeft />
        </button>

        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <Oval
              visible={true}
              height={80}
              width={80}
              color="#393280"
              secondaryColor="#39328067"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          bookData.map((book, index) => (
            <SwiperSlide className="flex justify-center items-center py-4" key={index}>
              <FeaturedBookCard name={book.name} price={book.price} author={book.author} description={book.description}/>
            </SwiperSlide>
          ))
        )}

        <button
          className="swiper-featuredbook-next w-10 h-10 bg-white rounded-full items-center justify-center shadow-md text-[#ED553B] hover:bg-[#ED553B] hover:text-white transition-colors border-[1px] border-[#ED553B] absolute right-5 top-1/2 transform -translate-y-1/2 z-50 md:flex hidden"
        >
          <MoveRight />
        </button>

        <div className="flex justify-between items-center relative gap-6 my-4 h-10">
          <div className="swiper-pagination relative w-full text-center"></div>
        </div>
      </Swiper>
    </section>
  );
}
