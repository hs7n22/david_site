"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./component/ui/background-beams-with-collision";
import { MailPlus, Phone, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ParticlesContainer from "@/app/component/ui/particles-container";
import { AppleCardsCarouselDemo } from "./component/ui/demo/apple-cards-demo";

export default function Home() {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      // 临时移除 snap 效果
      mainContent.classList.remove('snap-mandatory');
      // 滚动到顶部
      mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // 滚动完成后恢复 snap 效果
      setTimeout(() => {
        mainContent.classList.add('snap-mandatory');
      }, 1000);
    }
  };

  return (
    <main className="relative h-screen overflow-y-scroll snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80" id="main-content">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-6 py-4 flex justify-between items-center bg-black/10 backdrop-blur-sm">
          <Link 
            href="/" 
            className="h-8 relative cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <Image
              src="/Image/airwing.png"
              alt="Air Wing Logo"
              height={32}
              width={150}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-2">
            <a 
              href="tel:+1234567890" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white hover:text-white/80"
              title="电话联系"
            >
              <Phone className="w-6 h-6" />
            </a>
            <a 
              href="mailto:shenhantong@gmail.com" 
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white hover:text-white/80"
              title="邮件联系"
            >
              <MailPlus className="w-6 h-6" />
            </a>
            <a 
              href="https://youtube.com/@username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white hover:text-white/80"
              title="YouTube 频道"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white hover:text-white/80"
              title="Instagram 主页"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Section 1 - Welcome */}
      <section className="h-screen snap-start">
        <div className="relative h-full">
          <BackgroundBeamsWithCollision className="bg-gradient-to-br from-[#001B3B] via-[#003B7A] to-[#0066CC]">
            <div className="relative z-20 pt-24 px-4 flex flex-col h-screen">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
                    天翼汇航空科技
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                    打造低空经济新生态，引
                    领航空产业新未来
                  </p>
                </div>
              </div>
            </div>
          </BackgroundBeamsWithCollision>
          {/* 添加粒子效果层 */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <ParticlesContainer />
          </div>
        </div>
      </section>
      
      {/* Section 2 - About */}
      <section className="h-screen snap-start">
        <BackgroundBeamsWithCollision className="bg-gradient-to-br from-[#001B3B] via-[#003B7A] to-[#0066CC]">
          <div className="relative z-20 pt-24 px-4 flex h-screen">
            {/* 左侧文字内容 */}
            <div className="flex-1 pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#98FB98] mb-8">
                一、项目背景
              </h2>
              <div className="max-w-3xl space-y-6 text-white/90">
                <p className="text-lg md:text-xl text-left leading-relaxed">
                  自&ldquo;低空经济&rdquo;首次被写入国务院政府工作报告以来，&ldquo;低空经济&rdquo;成为国家新质生产力的增长方向，全国已经30个市将&ldquo;低空经济&rdquo;列为主��工作计划。
                </p>
                <p className="text-lg md:text-xl text-left leading-relaxed">
                  &ldquo;低空经济&rdquo;是指基于3000米低空空域内，以各种有人驾驶和无人驾驶航空器开展的各类低空飞行活动为牵引，带动相关领域融合发展的综合性新经济形态。
                </p>
                <p className="text-lg md:text-xl text-left leading-relaxed">
                  我国在汽车电动化革新进程中取得的三电技术成就，让航空业看到了新的前景，以eVTOL航空器（具备垂直起降、绿色能源���智能驾驶特点的载人/载货航空器）为代表新型航空器成为我国发展&ldquo;低空经济&rdquo;的主要选型，并以此作为在电动航空器领域弯道超车的机会。
                </p>
                <p className="text-lg md:text-xl text-left leading-relaxed">
                  2023年初，南川区文旅在头渡镇玉台村打造金佛山航空飞行营地，推出&ldquo;从空中鸟瞰金佛山&rdquo;观光项目，开启南川低空经济新篇章。2024年8月20日，飞行营地举行飞行盛宴，众多游客乘坐滑翔伞飞跃金佛山，领略空中美景，共同见证低空经济在南川���蓬勃发展。
                </p>
                <p className="text-lg md:text-xl text-left leading-relaxed">
                  结合产业发展进程，在城市空中交通（UAM）系统建成尚需时日的环境下，
                  <span className="text-[#98FB98] font-semibold">
                    把&ldquo;低空经济&rdquo;与&ldquo;文旅观光&rdquo;产业结合，将是&ldquo;低空经济&rdquo;价值见效最快、最明确的产业应用场景。
                  </span>
                </p>
              </div>
            </div>

            {/* 右侧箭头图片组 */}
            <div className="w-[350px] flex flex-col mt-8">
              <div className="h-[calc(100vh-10rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-blue-100/20 scrollbar-thumb-blue-400/60 hover:scrollbar-thumb-blue-400/80">
                <div className="space-y-4 py-4">
                  <div className="relative w-full aspect-[2/1.5] transform hover:scale-105 transition-transform">
                    <Image
                      src="/Image/vertiport.png"
                      alt="垂直起降机场"
                      fill
                      className="object-cover clip-arrow"
                      sizes="350px"
                    />
                  </div>
                  <div className="relative w-full aspect-[3/2] transform hover:scale-105 transition-transform">
                    <Image
                      src="/Image/mountain-view.png"
                      alt="山景"
                      fill
                      className="object-cover clip-arrow"
                    />
                  </div>
                  <div className="relative w-full aspect-[3/2] transform hover:scale-105 transition-transform">
                    <Image
                      src="/Image/red-mountain.png"
                      alt="红色山脉"
                      fill
                      className="object-cover clip-arrow"
                    />
                  </div>
                  <div className="relative w-full aspect-[3/2] transform hover:scale-105 transition-transform">
                    <Image
                      src="/Image/evtol.png"
                      alt="电动垂直起降飞机"
                      fill
                      className="object-cover clip-arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>
      
      {/* Section 3 - 投资方简介 */}
      <section className="h-screen snap-start">
        <BackgroundBeamsWithCollision className="bg-gradient-to-br from-[#001B3B] via-[#003B7A] to-[#0066CC]">
          <div className="relative z-20 pt-24 px-4 flex flex-col h-screen">
            <h2 className="text-3xl md:text-4xl font-bold text-[#98FB98] mb-8 text-center">
              二、投资方简介
            </h2>
            
            <div className="flex flex-1 items-center">
              {/* 左侧 Logo */}
              <div className="w-[500px] flex flex-col items-center justify-center relative min-h-[400px]">
                <div className="relative w-[400px] h-[100px] mb-8 animate-pulse">
                  <div className="absolute inset-0 bg-[#98FB98]/20 blur-2xl rounded-full" />
                  <Image
                    src="/Image/airwing.png"
                    alt="Air Wing Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_25px_rgba(152,251,152,0.3)] hover:drop-shadow-[0_0_35px_rgba(152,251,152,0.5)] transition-all duration-300"
                  />
                </div>
                {/* 粒子效果容器 */}
                <div className="absolute inset-0 pointer-events-none">
                  <ParticlesContainer />
                </div>
              </div>

              {/* 右侧文字内容 */}
              <div className="flex-1 pl-12 flex flex-col justify-center">
                <div className="max-w-3xl space-y-8 text-white/90">
                  <p className="text-xl md:text-2xl text-left leading-relaxed">
                    天翼汇（重庆）航空科技有限公司（简称：天翼汇）由来自于航空管理、航司运营、航空贸易领域从业的资深人士组成，团队依托于重庆两江新区对打造航空产业多元化布局所提供的政策优势，2023年在重庆两江保税港区落地成立。
                  </p>
                  <p className="text-xl md:text-2xl text-left leading-relaxed">
                    天翼汇团队凭着从业多年来与国内外航空器制造商、航空公司��航空技术、航空租赁机构的合作建立起了深厚产业资源，现立足重庆两江，面向国内外开展：航空器及航材贸易、航空技术开发与培训、低空产业三大业务板块的投资与运营。
                  </p>
                  <p className="text-xl md:text-2xl text-left leading-relaxed">
                    随着全国各地一系列&ldquo;低空经济&rdquo;推进政策的出台，新质生产力的产��发展机会将迎来快速发展，天翼汇充分发挥在航空产业资源的优势，与航空器制造商产品直通市场的合作模式，将低空航空器、运行与运营的行业资源整合，面向有志于产业发展的合作伙伴提供多方位，多模式的共赢合作。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>
      {/* Section 4 - 航空器简介 */}
      <section className="h-screen snap-start">
        <BackgroundBeamsWithCollision className="bg-gradient-to-br from-[#001B3B] via-[#003B7A] to-[#0066CC]">
          <div className="relative z-20 pt-20 px-8 pb-8 flex flex-col h-screen">
            <h2 className="text-3xl md:text-4xl font-bold text-[#98FB98] mb-8 text-center">
              三、航空器简介 <span className="text-white/80">eVTOL航空器</span>
            </h2>
            
            <div className="flex-1 flex items-start gap-12 overflow-y-auto pr-4 scrollbar-thin scrollbar-track-blue-100/20 scrollbar-thumb-blue-400/60">
              {/* 左侧文字说明 */}
              <div className="flex-1 space-y-6 min-w-0">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-colors">
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                    天翼汇计划引进的eVTOL航空器（载人级无人智能驾驶电动��直起降航空器）为亿航智能生产的EH-216S型电动航空器。该航空器是业内首款取得
                    <span className="text-[#98FB98] font-semibold">中国民航总局颁发的TC（型号合格证）、AC（适航合格证）和PC（生产许可证）</span>
                    的航空器。这是全球首款具备投入商业运营资格的载客类电动航空器，更是代表我国在全球电动航空器领域领先为傲的代表机型。
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-colors">
                  <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                    自&ldquo;低空经济&rdquo;产业新政出台以来，广州、深圳、珠海、苏州、无锡、合肥、武汉、太原、温州、南充等多个城市已迅速引进了该机型，建立低空经济示范基地。
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-colors">
                  <h3 className="text-[#98FB98] text-2xl font-bold mb-6">主要特点：</h3>
                  <div className="space-y-4 text-white/90">
                    <div className="flex items-start gap-4 hover:text-[#98FB98] transition-colors">
                      <span className="font-bold">1.</span>
                      <p>纯电、低噪（100米范围内运行噪音低于65dB）、安全、智能，航空级铝合金结构+碳纤维复合材料机身。</p>
                    </div>
                    <div className="flex items-start gap-4 hover:text-[#98FB98] transition-colors">
                      <span className="font-bold">2.</span>
                      <p>全景客舱，可搭载2人，超级充电效率（8分钟），满电续航50分钟（安全电量冗余25分钟）。</p>
                    </div>
                    <div className="flex items-start gap-4 hover:text-[#98FB98] transition-colors">
                      <span className="font-bold">3.</span>
                      <p>全系统安全双备份设计、自动驾驶系统、与地面监控指挥系统实时联网，智能指挥调度、可远程控制、可集群化管理，批量运行。</p>
                    </div>
                    <div className="flex items-start gap-4 hover:text-[#98FB98] transition-colors">
                      <span className="font-bold">4.</span>
                      <p>根据地形、地貌设计飞行观光航线，全程自动飞行，高精度视觉识别系统，风险预警保���。</p>
                    </div>
                    <div className="flex items-start gap-4 hover:text-[#98FB98] transition-colors">
                      <span className="font-bold">5.</span>
                      <p>运行场地建设成本低、建设周期短、运行成效高。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片展示 */}
              <div className="w-[500px] space-y-8 flex-shrink-0">
                <div className="relative h-[280px] w-full group">
                  <Image
                    src="/Image/evtol-1.png"
                    alt="eVTOL航空器展示"
                    fill
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-[180px] w-full group mb-8">
                  <Image
                    src="/Image/evtol-2.png"
                    alt="eVTOL航空器充电站"
                    fill
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* Section 5 - 业务范围 */}
      <section className="h-screen snap-start">
        <BackgroundBeamsWithCollision className="bg-gradient-to-br from-[#001B3B] via-[#003B7A] to-[#0066CC]">
          <div className="relative z-20 h-screen">
            <AppleCardsCarouselDemo />
          </div>
        </BackgroundBeamsWithCollision>
      </section>
    </main>
  );
}
