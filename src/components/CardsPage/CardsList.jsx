"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Cards() {
  const allCards = [
    {
      id: 1,
      title: "Tara Premium Debit Card",
      description: [
        "Up to BDT 5,000 cashback against minimum retail transactions of BDT 300,000 per year",
        "2 Reward Points for every BDT 80 spent",
        "Critical illness insurance coverage of BDT 150,000 or equivalent US$",
      ],
      image: "/tara-premium-debit-card.png",
      type: "Debit Cards",
    },
    {
      id: 2,
      title: "Multi-Currency Debit Card",
      description: [
        "Up to BDT 5,000 cashback against minimum retail transactions of BDT 300,000 per year",
        "2 Reward Points for every BDT 80 spent",
        "Critical illness insurance coverage of BDT 150,000 or equivalent US$",
      ],

      image: "/multi-currency-debit-card.png",
      type: "Debit Cards",
    },
    {
      id: 3,
      title: "Mastercard World Credit Card",
      description: [
        "Up to BDT 5,000 cashback against minimum retail transactions of BDT 300,000 per year",
        "2 Reward Points for every BDT 80 spent",
        "Critical illness insurance coverage of BDT 150,000 or equivalent US$",
      ],
      image: "/mastercard-world-credit-card.png",
      type: "Credit Cards",
    },
    {
      id: 4,
      title: "VISA Prepaid Gift Card",
      description: [
        "Up to BDT 5,000 cashback against minimum retail transactions of BDT 300,000 per year",
        "2 Reward Points for every BDT 80 spent",
        "Critical illness insurance coverage of BDT 150,000 or equivalent US$",
      ],
      image: "/visa-prepaid-gift-card.png",
      type: "Prepaid Cards",
    },
    {
      id: 5,
      title: "Freelancer Matrix Card",
      description: [
        "Up to BDT 5,000 cashback against minimum retail transactions of BDT 300,000 per year",
        "2 Reward Points for every BDT 80 spent",
        "Critical illness insurance coverage of BDT 150,000 or equivalent US$",
      ],
      image: "/freelancer-matrix-card.png",
      type: "Debit Cards",
    },
  ];
  //   const creditCards = [
  //     {
  //       id: 6,
  //       title: "Credit Card Title 1",
  //       description: [
  //         "Credit Card Description 1 Point 1",
  //         "Credit Card Description 1 Point 2",
  //         "Credit Card Description 1 Point 3",
  //         "Credit Card Description 1 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 7,
  //       title: "Credit Card Title 2",
  //       description: [
  //         "Credit Card Description 2 Point 1",
  //         "Credit Card Description 2 Point 2",
  //         "Credit Card Description 2 Point 3",
  //         "Credit Card Description 2 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 8,
  //       title: "Credit Card Title 3",
  //       description: [
  //         "Credit Card Description 3 Point 1",
  //         "Credit Card Description 3 Point 2",
  //         "Credit Card Description 3 Point 3",
  //         "Credit Card Description 3 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 9,
  //       title: "Credit Card Title 4",
  //       description: [
  //         "Credit Card Description 4 Point 1",
  //         "Credit Card Description 4 Point 2",
  //         "Credit Card Description 4 Point 3",
  //         "Credit Card Description 4 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 10,
  //       title: "Credit Card Title 5",
  //       description: [
  //         "Credit Card Description 5 Point 1",
  //         "Credit Card Description 5 Point 2",
  //         "Credit Card Description 5 Point 3",
  //         "Credit Card Description 5 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //   ];
  //   const debitCards = [
  //     {
  //       id: 11,
  //       title: "Debit Card Title 1",
  //       description: [
  //         "Debit Card Description 1 Point 1",
  //         "Debit Card Description 1 Point 2",
  //         "Debit Card Description 1 Point 3",
  //         "Debit Card Description 1 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 12,
  //       title: "Debit Card Title 2",
  //       description: [
  //         "Debit Card Description 2 Point 1",
  //         "Debit Card Description 2 Point 2",
  //         "Debit Card Description 2 Point 3",
  //         "Debit Card Description 2 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 13,
  //       title: "Debit Card Title 3",
  //       description: [
  //         "Debit Card Description 3 Point 1",
  //         "Debit Card Description 3 Point 2",
  //         "Debit Card Description 3 Point 3",
  //         "Debit Card Description 3 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 14,
  //       title: "Debit Card Title 4",
  //       description: [
  //         "Debit Card Description 4 Point 1",
  //         "Debit Card Description 4 Point 2",
  //         "Debit Card Description 4 Point 3",
  //         "Debit Card Description 4 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 15,
  //       title: "Debit Card Title 5",
  //       description: [
  //         "Debit Card Description 5 Point 1",
  //         "Debit Card Description 5 Point 2",
  //         "Debit Card Description 5 Point 3",
  //         "Debit Card Description 5 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //   ];
  //   const prepaidCards = [
  //     {
  //       id: 16,
  //       title: "Prepaid Card Title 1",
  //       description: [
  //         "Prepaid Card Description 1 Point 1",
  //         "Prepaid Card Description 1 Point 2",
  //         "Prepaid Card Description 1 Point 3",
  //         "Prepaid Card Description 1 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 17,
  //       title: "Prepaid Card Title 2",
  //       description: [
  //         "Prepaid Card Description 2 Point 1",
  //         "Prepaid Card Description 2 Point 2",
  //         "Prepaid Card Description 2 Point 3",
  //         "Prepaid Card Description 2 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 18,
  //       title: "Prepaid Card Title 3",
  //       description: [
  //         "Prepaid Card Description 3 Point 1",
  //         "Prepaid Card Description 3 Point 2",
  //         "Prepaid Card Description 3 Point 3",
  //         "Prepaid Card Description 3 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 19,
  //       title: "Prepaid Card Title 4",
  //       description: [
  //         "Prepaid Card Description 4 Point 1",
  //         "Prepaid Card Description 4 Point 2",
  //         "Prepaid Card Description 4 Point 3",
  //         "Prepaid Card Description 4 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //     {
  //       id: 20,
  //       title: "Prepaid Card Title 5",
  //       description: [
  //         "Prepaid Card Description 5 Point 1",
  //         "Prepaid Card Description 5 Point 2",
  //         "Prepaid Card Description 5 Point 3",
  //         "Prepaid Card Description 5 Point 4",
  //       ],
  //       image: "Freelancer Matrix Card.png",
  //     },
  //   ];
  const [activeTab, setActiveTab] = useState("All Cards");
  const filteredCards = allCards.filter((card) => {
    if (activeTab === "All Cards") return true;
    return card.type.toLowerCase() === activeTab.toLowerCase();
  });

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="container mx-auto mt-16">
        {" "}
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center mb-10">
              {" "}
              <div className="grid grid-cols-4 items-center justify-center bg-[#FFFFFF] drop-shadow-xl ">
                <div className="w-full">
                  <button
                    onClick={() => handleClick("All Cards")}
                    className={`py-3 px-10 ${
                      activeTab === "All Cards"
                        ? "bg-[#006CB6] text-white"
                        : "text-[#085990]"
                    }`}
                  >
                    All Cards
                  </button>
                </div>
                <div className="w-full">
                  {" "}
                  <button
                    onClick={() => handleClick("Credit Cards")}
                    className={`py-3 px-10 text-justify ${
                      activeTab === "Credit Cards"
                        ? "bg-[#006CB6] text-white"
                        : "text-[#085990]"
                    }`}
                  >
                    Credit Cards
                  </button>
                </div>
                <div className="w-full">
                  {" "}
                  <button
                    onClick={() => handleClick("Debit Cards")}
                    className={`py-3 px-10 ${
                      activeTab === "Debit Cards"
                        ? "bg-[#006CB6] text-white"
                        : "text-[#085990]"
                    }`}
                  >
                    Debit Cards
                  </button>
                </div>
                <div className="w-full">
                  {" "}
                  <button
                    onClick={() => handleClick("Prepaid Cards")}
                    className={`py-3 px-10 ${
                      activeTab === "Prepaid Cards"
                        ? "bg-[#006CB6] text-white"
                        : "text-[#085990]"
                    }`}
                  >
                    Prepaid Cards
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-10">
              {filteredCards.map((card) => {
                return (
                  <div key={card?.id} className="py-4  ">
                    <div className="py-4 bg-gradient-to-r from-[#D7EDFD]/50  to-[#FFFAF5] rounded-3xl drop-shadow-xl border-[1.31px] border-[#FFFFFF]/20">
                      <div className="md:flex items-center justify-center px-4 md:space-x-10 ">
                        <div className="flex items-center justify-center lg:w-[70%] w-[100%] border-[10px] border-white rounded-3xl drop-shadow-md">
                          <Image
                            src={card.image}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            priority
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex-grow flex items-center justify-start py-3 w-[100%]">
                          <div className="w-full">
                            <div>
                              <div className="lg:text-[32px] text-xl font-bold text-[#333333]">
                                {card.title}
                              </div>
                            </div>
                            <div className="w-full">
                              <ul className="list-disc md:text-[18px] text-sm  pl-4 text-[#535353]">
                                {card.description.map((point, index) => (
                                  <li
                                    key={index}
                                    className="pt-2 leading-relaxed w-full"
                                  >
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="pt-7">
                              <button className="bg-[#006CB6] px-5 py-2 rounded-xl border border-[#006CB6] text-white text-[16px] hover:bg-transparent hover:text-[#006CB6] transition duration-300">
                                Learn More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
