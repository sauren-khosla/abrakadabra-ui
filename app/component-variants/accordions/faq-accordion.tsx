"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | "All">(
    "All"
  );

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-2xl mx-auto py-4 px-1">
      <h2 className="text-xl font-medium mb-4">Frequently Asked Questions</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSelectedCategory("All")}
          className={cn(
            "px-4 h-6 text-xs rounded-full border",
            selectedCategory === "All"
              ? "bg-black text-white"
              : "bg-white text-gray-700"
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "px-4 h-6 text-xs rounded-full border",
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <Accordion type="multiple">
        {filteredFAQs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="flex items-center font-normal">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filteredFAQs.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No FAQs match your search.
        </p>
      )}
    </div>
  );
}

const faqs = [
  {
    id: "faq1",
    category: "General",
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase.",
    isImportant: true,
  },
  {
    id: "faq2",
    category: "Billing",
    question: "How do I update my billing information?",
    answer:
      "Navigate to your account settings and update your billing details.",
  },
  {
    id: "faq3",
    category: "Technical",
    question: "How to reset my password?",
    answer:
      "Click on 'Forgot Password' at the login screen and follow the instructions.",
  },
];

export default function FAQAccordionDemo() {
  return <FAQAccordion faqs={faqs} />;
}
