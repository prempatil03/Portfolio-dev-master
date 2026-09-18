'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function CertificateThumb({ cert }) {
  if (cert.type === 'pdf') {
    return (
      <>
        <iframe
          src={`${cert.src}#page=1&toolbar=0&navpanes=0&scrollbar=0&zoom=page-width`}
          title={cert.title}
          className="pointer-events-none absolute inset-0 h-[140%] w-full origin-top scale-[1.02] bg-white"
          tabIndex={-1}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 py-2">
          <p className="truncate text-xs font-medium text-white">{cert.title}</p>
        </div>
      </>
    );
  }

  return (
    <Image
      src={cert.src}
      alt={cert.title}
      fill
      className="object-contain p-2"
      sizes="256px"
    />
  );
}

function PreviewPopup({ active, onClose }) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-gray-500 bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl border-2 border-black bg-white p-4 shadow-[0_0_60px_rgba(0,0,0,0.9),0_25px_50px_rgba(0,0,0,0.75)] dark:border-gray-200 dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-100">{active.title}</p>
          <div className="flex items-center gap-2">
            {active.type === 'pdf' && (
              <a
                href={active.src}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-black px-2 py-1 text-sm text-blue-600 hover:bg-gray-50 dark:border-gray-300 dark:text-blue-400 dark:hover:bg-gray-800"
              >
                Open PDF
              </a>
            )}
            <button
              type="button"
              className="rounded-md border border-black px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-800"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>

        <div className="relative mx-auto h-[75vh] w-full overflow-hidden rounded-lg border-2 border-black bg-gray-50 shadow-inner dark:border-gray-300 dark:bg-gray-800">
          {active.type === 'pdf' ? (
            <iframe
              src={`${active.src}#toolbar=1&navpanes=0`}
              title={active.title}
              className="h-full w-full"
            />
          ) : (
            <Image
              src={active.src}
              alt={active.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CertificatesListModal({ isOpen, closeModal, certificates, onOpenCert }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg border-2 border-black bg-white px-4 pb-4 pt-5 text-left shadow-[0_0_50px_rgba(0,0,0,0.85)] transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 dark:border-gray-200 dark:bg-gray-900 dark:text-gray-100">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md border border-black bg-white text-gray-500 hover:text-gray-800 dark:border-gray-300 dark:bg-gray-900 dark:text-gray-300 dark:hover:text-white"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <Dialog.Title as="h3" className="mb-8 text-2xl font-semibold">
                  All Certificates
                </Dialog.Title>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {certificates.map((cert) => (
                    <button
                      key={cert.src}
                      type="button"
                      onClick={() => {
                        closeModal();
                        onOpenCert(cert);
                      }}
                      className="group overflow-hidden rounded-lg border-2 border-black text-left shadow-md transition-shadow hover:shadow-[0_0_24px_rgba(0,0,0,0.35)] dark:border-gray-300 dark:bg-gray-900"
                    >
                      <div className="relative h-44 w-full bg-gray-50 dark:bg-gray-800">
                        {cert.type === 'pdf' ? (
                          <iframe
                            src={`${cert.src}#page=1&toolbar=0&navpanes=0&scrollbar=0&zoom=page-width`}
                            title={cert.title}
                            className="pointer-events-none absolute inset-0 h-[140%] w-full bg-white"
                            tabIndex={-1}
                          />
                        ) : (
                          <Image
                            src={cert.src}
                            alt={cert.title}
                            fill
                            className="object-contain p-2"
                            sizes="400px"
                          />
                        )}
                      </div>
                      <div className="flex items-center justify-between border-t-2 border-black px-4 py-3 dark:border-gray-300">
                        <div className="flex min-w-0 items-center gap-2">
                          <DocumentTextIcon className="h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300" />
                          <span className="truncate text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {cert.title}
                          </span>
                        </div>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default function CertificatesMarquee({ certificates }) {
  const [active, setActive] = useState(null);
  const [listOpen, setListOpen] = useState(false);

  if (!certificates || certificates.length === 0) {
    return (
      <>
        <h2 className="mb-8 text-2xl">Certificates</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Add certificate files (PDF, PNG, JPG, WEBP) to{' '}
          <code className="text-xs bg-gray-100 px-1 rounded dark:bg-gray-800">public/certificates</code>
          {' '}and they will appear here automatically.
        </p>
      </>
    );
  }

  const loopItems = [...certificates, ...certificates];

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl">Certificates</h2>
        <button
          type="button"
          onClick={() => setListOpen(true)}
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View More
          <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="certificates-marquee flex w-max gap-6 hover:[animation-play-state:paused]">
          {loopItems.map((cert, index) => (
            <button
              key={`${cert.src}-${index}`}
              type="button"
              className="relative h-44 w-72 flex-shrink-0 overflow-hidden rounded-lg border-2 border-black bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:z-10 hover:scale-110 hover:shadow-[0_0_28px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-300 dark:bg-gray-900 dark:focus:ring-gray-300"
              onClick={() => setActive(cert)}
              aria-label={cert.title}
            >
              <CertificateThumb cert={cert} />
            </button>
          ))}
        </div>
      </div>

      <CertificatesListModal
        isOpen={listOpen}
        closeModal={() => setListOpen(false)}
        certificates={certificates}
        onOpenCert={setActive}
      />

      <PreviewPopup active={active} onClose={() => setActive(null)} />
    </>
  );
}
