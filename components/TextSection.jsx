import Image from "next/image";

const TextContent = () => {
  return (
    <>
      <section className="bg-[url('/Assets/Left.png')] w-full">
        <div className="container mx-auto bg-white px-10">
          <div className="p-20 bg-[url('/Assets/Brush.png')] bg-center bg-no-repeat ">
            <h1 className="text-blue-800 text-center text-3xl font-bold ">
              Ash and Pocomon arrives in <br /> Pocomon Universe
            </h1>
          </div>
          <div className=" hidden lg:grid grid-cols-2 gap-5 text-justify text-xs mb-20 ">
            {/* left side */}
            <div className="">
              {/* upper portion */}
              <div className="grid grid-cols-4  gap-4 mb-3  ">
                {/* upper left */}
                <div className="col-span-3 ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente, tempore in similique aspernatur vitae aliquid
                    velit eius error saepe inventore omnis porro? Ratione odio
                    veritatis inventore excepturi minus expedita iste? Lorem
                    ipsum lore
                  </p>
                  <div className="grid grid-cols-3 gap-5 py-5">
                    <p className="cols-start-1 col-span-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Tenetur repellendus molestiae sapiente voluptatem a
                      debitis exercitationem numquam doloremque? Lorem ipsum
                      dolor, sit amet consectetur adipisicing elit. Minima
                      labore explicabo dicta esse, ex ipsa quis mollitia ut
                      laboriosam porro repellendus repudiandae illum id officia
                      facilis fuga officiis doloribus dignissimos. Lorem, ipsumu
                      dolor amet acceptio.
                    </p>
                    <Image
                      src="/Assets/Image04.png"
                      width={150}
                      height={150}
                      alt="pickachu"
                    />
                  </div>
                  <p>
                    Dolor sit amet consectetur adipisicing elit. Numquam
                    exercitationem officiis expedita distinctio minima dolorem
                    recusandae aliquam nobis cupiditate quasi, nisi ducimus enim
                    laudantium laborum sed repellendus quaerat. Eius, harum.
                  </p>
                </div>
                {/* upper right image container */}
                <div className="col-start-4	flex flex-col gap-5">
                  <Image
                    src="/Assets/Image03.png"
                    width={150}
                    height={150}
                    alt="pickachu"
                  />
                  <Image
                    src="/Assets/Image02.png"
                    width={150}
                    height={150}
                    alt="pickachu"
                  />
                </div>
              </div>
              {/* lower potion */}
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores modi est architecto magnam odio eaque officia, quis id
                  aperiam, vitae labore provident iste voluptate sed suscipit
                  ipsam reprehenderit sint? Autem? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Deleniti numquam quibusdam rerum
                  totam Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Doloremque velit esse eius non ratione recusandae ipsam,
                  nisi facilis explicabo minima. Iusto perferendis magnam
                  quaerat consectetur impedit iure possimus architecto commodi.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  beatae amet neque quaerat, ut quo cumque harum numquam
                  mollitia? Consequuntur, dicta inventore. Perspiciatis qui
                  dolore quos ad doloribus consectetur nostrum? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Veritatis
                  incidunt, mollitia pariatur ducimus ipsum earum! Blanditiis
                  asperiores voluptate similique atque minus eaque labore ea
                  magni, id, iure numquam, nisi consequatur!
                </p>
              </div>
            </div>
            {/* right side */}
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                architecto quasi cumque illum aspernatur iusto id voluptatem
                dignissimos magnam voluptas recusandae consequuntur amet
                repudiandae suscipit quis, consectetur harum cupiditate quo!
              </p>
              <div className="grid grid-cols-3 gap-1 pt-4">
                <Image
                  className=""
                  src="/Assets/Image05.png"
                  width={170}
                  height={170}
                  alt="pickachu"
                />
                <p className="cols-start-2 col-span-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ipsum obcaecati voluptates beatae totam aliquid
                  iusto adipisci consequatur alias molestiae. Quo rem quia
                  fugiat excepturi id ut, sapiente magnam ab! Lorem ipsum dolor
                  sit amet consectet fugiat excepturi id ut, sapiente magnam ab!
                  Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ad eos magnam omnis illum
                  veniam dolores reiciendis, minus optio ea eligendi maiores
                  dolor similique quis vel officia possimus. Tempora, reiciendis
                  quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Id aliquam minima corrupti vel officiis corporis ipsum
                  quia repellendus
                </p>
              </div>
              <div className="grid grid-cols-3  py-4">
                <Image
                  src="/Assets/Image01.png"
                  width={170}
                  height={170}
                  alt="pickachu"
                />
                <p className="cols-start-2 col-span-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus ipsum obcaecati voluptates beatae totam aliquid
                  iusto adipisci consequatur alias molestiae. Quo rem quia
                  fugiat excepturi id ut, sapiente magnam ab! Lorem ipsum dolor
                  sit amet consectet fugiat excepturi id ut, sapiente magnam ab!
                  Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ad eos magnam omnis illum
                  veniam dolores reiciendis, minus optio ea eligendi maiores
                  dolor similique quis vel officia possimus. Tempora, reiciendis
                  quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Id aliquam minima corrupti vel officiis corporis ipsum
                  quia repellendus
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                placeat enim libero assumenda laboriosam corporis magni quae
                excepturi explicabo rem. Recusandae dignissimos ullam
                praesentium voluptates dolore itaque maiores dolores iusto!{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                modi debitis nobis odio pariatur illo nisi omnis facere qui
                nulla, error obcaecati porro laboriosam hic placeat deleniti
                deserunt facilis?
              </p>
            </div>
          </div>
          {/* shows only on smaller device */}
          <div className="p-3 sm:block lg:hidden text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis possimus accusamus suscipit nobis rerum ex provident
              officia et est itaque assumenda, accusantium doloremque ut error,
              non incidunt, saepe ducimus aspernatur? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ea nam delectus doloribus cum
              odio magnam. Delectus, repellat! Sequi facere distinctio unde,
              sint, eum adipisci quasi id, eveniet impedit atque fugit!
            </p>
            <div className=" sm:grid grid-cols-3   gap-3  py-10 ">
              <div className="row-start-2  row-span-3 ">
                <Image
                  src="/Assets/Image04.png"
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
              <div className="row-start-1 row-span-2  col-start-2">
                <Image
                  src="/Assets/Image03.png"
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
              <div className="row-start-3 row-span-2  col-start-2">
                <Image
                  src="/Assets/Image02.png"
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
              <div className="row-start-2 row-span-2  col-start-3">
                <Image
                  src="/Assets/Image05.png"
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
              <div className="row-start-4 row-span-2  col-start-3">
                <Image
                  src="/Assets/Image01.png"
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              nulla asperiores illo, ipsam hic, placeat dignissimos sit
              architecto ad consequuntur ea facilis fugiat. Quod temporibus,
              accusamus fugiat corrupti at officia! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nihil modi consequuntur adipisci,
              quas repellendus laborum cum aliquid amet labore nesciunt
              similique ab perspiciatis explicabo quasi. Ullam assumenda
              recusandae provident laboriosam?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ipsa quidem labore asperiores
              aliquam molestiae temporibus sit illum corporis, deleniti,
              suscipit dolorum aperiam non ipsum nisi dolor commodi perspiciatis
              consequuntur! Doloribus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextContent;
