import Image from "next/image";
import Whycard from "./components/home/Whycard";
import Footer from "./components/home/Footer";

export default function Home() {
  const scrollHandeler = () => {};

  return (
    <main className="text-gray-200 mt-20 w-full">
      <h1 className="text-4xl max-sm:text-lg text-center mt-10">
        به سایت خودتون یعنی منوگراف خوش آمد
      </h1>
      <div className="text-center max-sm:grid-cols-1 grid grid-cols-2 w-full">
        <div className="w1/3">
          <p className="w-2.8/3 text-gray-400 p-6 rounded max-md:mt-8 max-md:text-lg mt-28 ml-12 text-2xl text-right">
            ما در این سایتسعی کردیم که با کمک از بهترین نمونه های داخلی و یا
            خارجی برای شما قابلیت رزرو رستوران ها کافه ها و همچنین سفارش از طریق
            منوی خاص رو در اختیارتون قرار بدیم پس اگر شما هم یکی از کارفرماها
            هستین در استفاده از منوگراف شک نکنید چون با ملبلغ کمی نسبت به کارایی
            اون میتونین کار خودتون و مشتری رو راحت تر کنین
          </p>
          <button className="bg-indigo-600 text-4xl hover:cursor-alias px-8 py-4 rounded-lg">
              MenuGraph          </button>
        </div>
        <div className="mr-8 w1/3">
          <img src="/images/banner.svg" />
        </div>
      </div>
      <section className="w-full h-full bg-neutral-900">
        <h1 className=" mt-24 max-md:text-2lg text-center text-3xl">
          {" "}
          چرا منوگراف و انتخاب کنم ؟
        </h1>
        <div className=" mt-20 grid max-sm:grid-cols-1 grid-cols-4 text-center">
      
         
          <Whycard para="
              با استفاده از منوی گراف، می‌توانید به راحتی تغییراتی را در منوی
              خود اعمال کنید. اگر می‌خواهید غذاها یا نوشیدنی‌های جدید را به منو
              اضافه یا حذف کنید، می‌توانید این تغییرات را به سرعت در منوی گراف
              اعمال کنید و آن را به روز نگه دارید. این امکان به شما اجازه می‌دهد
              تا با سرعت بازخورد مشتریان را دریافت کنید و به نیازهای آن‌ها پاسخ
              دهید." title="سازگاری با تغییرات" />

              <Whycard title={"ظاهر جذاب"} para="   منوی گراف به شکلی زیبا و حرفه‌ای طراحی می‌شود. با استفاده از
               قالب‌ها، فونت‌ها، رنگ‌ها و تصاویر با کیفیت، می‌توانید یک منوی جذاب
               را ایجاد کنید که مشتریان را جذب کند  و از تجربه تاثیرگذاری بر
               رویشان برخوردار شوید"  />
              <Whycard title={" قابلیت بروزرسانی آسان"} para="  منوی گراف به صورت دیجیتالی است و می‌توانید آن را بر روی تبلت‌ها و
              تلفن‌های هوشمند نمایش دهید. این به شما اجازه می‌دهد تا منو را به
              راحتی بروزرسانی کنید و هزینه‌های چاپ مجدد منو را کاهش دهید.
              همچنین، می‌توانید اطلاعات تکمیلی را درباره غذاها، مواد
              تشکیل‌دهنده، آلرژن‌ها و سایر جزئیات را در منوی گراف قرار دهید. " />
              <Whycard title={"افزایش فروش"} para=" منوی گراف می‌تواند به شما کمک کند تا غذاها و نوشیدنی‌های خود را
              بهبود بخشیده و جذابیت آن‌ها را بیشتر کنید. با استفاده از تصاویر
              زیبا و توصیفات جذاب، می‌توانید اشتهای مشتریان را برانگیزید و آن‌ها
              را ترغیب به سفارش غذاهای بیشتر کنید. همچنین، می‌توانید قیمت‌ها را
              به روز کنید" />
         
        </div>
      </section>
      {/* <Footer  /> */}
    </main>
  );
}
