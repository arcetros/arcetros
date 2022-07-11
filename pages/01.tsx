import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

const Project1 = () => (
  <Layout>
    <div className="flex flex-col gap-y-4">
      <span className="underline">go back home</span>
      <h1 className="text-[2rem] text-primary">Srawana</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum,
        nostrum atque tempora adipisci id provident incidunt odio repudiandae
        corrupti, perferendis earum aspernatur. Quam sequi voluptatum
        praesentium sed mollitia at?
      </p>
      <section>
        <table>
          <tbody>
            <tr>
              <th className="text-left pr-4">stack:</th>
              <td>test 1, test 2</td>
            </tr>

            <tr>
              <th className="text-left pr-4">code:</th>
              <td>github repo</td>
            </tr>

            <tr>
              <th className="text-left pr-4">live:</th>
              <td>Live site</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="relative h-[24.5625rem] w-full mt-8">
        <Image
          src="/testimage.jfif"
          alt="Photo"
          layout="fill"
          objectFit="cover"
        />
      </section>
    </div>
    <main className="flex flex-col gap-y-8 mt-8">
      <div>
        <h1 className="text-primary text-3xl">Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum
          praesentium amet odio repellendus? Molestias at consequuntur adipisci,
          modi, harum rerum vero nihil, unde fuga blanditiis accusantium
          sapiente! Distinctio, quaerat?
        </p>
      </div>
      <div>
        <h1 className="text-primary text-3xl">Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum
          praesentium amet odio repellendus? Molestias at consequuntur adipisci,
          modi, harum rerum vero nihil, unde fuga blanditiis accusantium
          sapiente! Distinctio, quaerat?
        </p>
      </div>
      <div>
        <h1 className="text-primary text-3xl">Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum
          praesentium amet odio repellendus? Molestias at consequuntur adipisci,
          modi, harum rerum vero nihil, unde fuga blanditiis accusantium
          sapiente! Distinctio, quaerat?
        </p>
      </div>
    </main>
  </Layout>
);

export default Project1;
