type Props = {
  custom?: string;
};

export function MedicalDisclaimer({ custom }: Props) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 mb-8">
      <strong>Medical Disclaimer:</strong>{" "}
      {custom ??
        "This article is educational and based on lived experience and modern addiction science. It is not medical advice."}{" "}
      If you need immediate help, contact{" "}
      <a
        href="https://www.samhsa.gov/find-help/national-helpline"
        className="underline"
        rel="noopener"
        target="_blank"
      >
        SAMHSA&rsquo;s National Helpline
      </a>{" "}
      at 1-800-662-4357.
    </div>
  );
}
