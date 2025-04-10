import { Container } from '@/components';
import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BlogAndTipsSection: React.FC = () => {
  return (
    <Container>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase text-gray-500">BLOG AND TIPS</p>
          <h2 className="text-2xl font-bold text-[#0d4a3a]">Insights From the VA World</h2>
        </div>
        <Link
          href="#"
          className="flex items-center text-sm font-medium text-[#0d4a3a] rounded-full border border-[#0d4a3a] px-3 py-1"
        >
          View All <ChevronRight className="ml-1 h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* Blog 1 */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-[#0d4a3a] px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">#Productivity</span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              How Virtual Assistants Boost Efficiency for Busy Entrepreneurs
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Learn how VAs can streamline repetitive tasks so you can focus on scaling your business...
            </p>
            <Link href="#" className="text-xs font-medium text-black">
              Learn More
            </Link>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-[#0d4a3a] px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">#Outsourcing</span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              Why Hiring a VA Is a Smart Move for Startups
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Discover the financial and operational benefits of working with skilled virtual assistants...
            </p>
            <Link href="#" className="text-xs font-medium text-black">
              Learn More
            </Link>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-[#0d4a3a] px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">#VA Tips</span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              Tasks You Should Delegate to a Virtual Assistant Today
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Not sure where to start? Here’s a list of everyday tasks your VA can take off your plate...
            </p>
            <Link href="#" className="text-xs font-medium text-black">
              Learn More
            </Link>
          </div>
        </div>

        {/* Blog 4 */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="h-40 bg-gray-200"></div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-[#0d4a3a] px-2 py-1 text-xs font-medium text-white">
                <Calendar className="mr-1 h-3 w-3" /> 2024.12.19
              </span>
              <span className="text-xs font-medium text-blue-600">#Remote Work</span>
            </div>
            <h3 className="mb-2 text-sm font-bold">
              Managing a Remote Team with the Help of Virtual Assistants
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Explore how virtual assistants fit perfectly into remote teams and boost collaboration...
            </p>
            <Link href="#" className="text-xs font-medium text-black">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <button className="h-8 w-8 rounded-full border border-blue-600 bg-blue-600 text-white flex items-center justify-center">
          1
        </button>
        <button className="h-8 w-8 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center">
          2
        </button>
        <button className="h-8 w-8 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center">
          3
        </button>
      </div>
    </Container>
  );
};

export default BlogAndTipsSection;
