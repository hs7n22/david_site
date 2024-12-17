"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";

export function AppleCardsCarouselDemo() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 400 + 24; // 卡片宽度 + 间距
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 400 + 24; // 卡片宽度 + 间距
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    if (carouselRef.current) {
      scrollRight();
    }
  };

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans mb-12">
      低空观光场景展望
      </h2>
      
      <div className="relative max-w-[90vw] mx-auto">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 px-4 scrollbar-none select-none"
          onScroll={checkScrollability}
          style={{ 
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-[400px] h-[600px] relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ scrollSnapAlign: 'center' }}
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/80">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-end gap-2 mt-4 px-4">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center disabled:opacity-50 transition-opacity"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center disabled:opacity-50 transition-opacity"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* 详细内容弹窗 */}
      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto py-10"
            onClick={handleCloseModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-4xl w-full mx-4 text-white relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold">{cards[selectedCard].title}</h3>
                <button 
                  onClick={handleCloseModal}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <IconX className="h-6 w-6" />
                </button>
              </div>
              <div className="relative mb-6">
                <div className="aspect-[16/9] w-full relative">
                  <Image
                    src={cards[selectedCard].image}
                    alt={cards[selectedCard].title}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">{cards[selectedCard].fullDescription}</p>
                <ul className="list-disc list-inside space-y-2">
                  {cards[selectedCard].features?.map((feature, index) => (
                    <li key={index} className="text-white/90">{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const cards = [
  {
    title: "景区观光",
    description: "城市，山脉，湖泊与海洋",
    image: "/Image/03.png",
    fullDescription: "通过eVTOL航空器提供独特的空中观光体验，让游客从全新的视角欣赏自然与城市景观。我们的观光路线覆盖城市地标、山川湖泊、海岸线等多样化景观，为游客带来震撼的视觉体验。",
    features: [
      "360度全景观光体验",
      "定制化观光路线设计",
      "智能航线规划系统",
      "专业飞行安全保障",
      "全天候观光服务"
    ]
  },
  {
    title: "项目建设",
    description: "eVtol运营场地设计概念参考",
    image: "/Image/04.png",
    fullDescription: "为eVTOL运营提供全方位的场地设计解决方案，从选址评估到建设完工的一站式服务。我们的设计理念融合了功能性与美观性，确保场地既能满足运营需求，又能成为地标性建筑。",
    features: [
      "场地选址评估",
      "建筑方案设计",
      "充电设施规划",
      "旅客服务设施",
      "智能调度系统"
    ]
  },
  {
    title: "景区穿梭",
    description: "实现景区与景区的快速穿梭",
    image: "/Image/06.png",
    fullDescription: "打造景区间的空中快线，实现景点之间的无缝连接。通过eVTOL航空器，大幅缩短景区间的通行时间，提升游客体验，促进区域旅游资源的整合与开发。",
    features: [
      "景区快速连接",
      "灵活航线设置",
      "一票通行服务",
      "全程智能调度",
      "便捷预约系统"
    ]
  },
  {
    title: "场地建设",
    description: "evtol起降机坪的建设规范和配套设计",
    image: "/Image/07.png",
    fullDescription: "按照国际标准打造专业的eVTOL起降设施，包括机坪、充电站、候机区等配套设施的规范化建设。我们的设计充分考虑了安全性、实用性和可扩展性，为未来的空中出行提供坚实基础。",
    features: [
      "标准化机坪设计",
      "智能充电系统",
      "旅客候机设施",
      "安全监控系统",
      "维护保养中心"
    ]
  },
  {
    title: "航空器及航材贸易",
    description: "专注于航空器及航材的采购、销售和租赁业务",
    image: "/Image/4.webp",
    fullDescription: "作为专业的航空资产服务商，我们为客户提供全方位的航空器及航材解决方案。从采购咨询、资产评估到售后支持，我们的服务贯穿航空器全生命周期，确保客户获得最优质的产品和服务。",
    features: [
      "航空器整机交易",
      "航材供应链管理",
      "资产评估咨询",
      "融资租赁方案",
      "维修保障服务"
    ]
  }
];