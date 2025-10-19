import { Website } from "@/models/websites";

export default function WebsiteProsCons({ dataWebsite }: { dataWebsite: Website }) {
    const pros: string[] = [];
    const cons: string[] = [];

    if (dataWebsite.is_official) {
        pros.push(`Official Steam Website`);
    }

    if (dataWebsite.verified) {
        pros.push(`Website was verified by admins!`);
    }else {
        cons.push(`Website was NOT verified by admins!`);
    }

    switch (dataWebsite.risk_level) {
        case "unknown":
            pros.push(`Risk Level: ${dataWebsite.risk_level.toUpperCase()} (${dataWebsite.risk_score}%)`);
            break;
        case "low":
            pros.push(`Risk Level: ${dataWebsite.risk_level.toUpperCase()} (${dataWebsite.risk_score}%)`);
            break;
        case "medium":
            pros.push(`Risk Level: ${dataWebsite.risk_level.toUpperCase()} (${dataWebsite.risk_score}%)`);
            break;
        case "high":
            cons.push(`Risk Level: ${dataWebsite.risk_level.toUpperCase()} (${dataWebsite.risk_score}%)`);
            break;
        case "critical":
            cons.push(`Risk Level: ${dataWebsite.risk_level.toUpperCase()} (${dataWebsite.risk_score}%)`);
            break;
    }

    // TLD logic
    const safeTlds = ["com", "net", "org"];
    if (safeTlds.includes(dataWebsite.tld)) {
        pros.push(`Trusted TLD: .${dataWebsite.tld}`);
    } else {
        cons.push(`Suspicious TLD: .${dataWebsite.tld}`);
    }

    return (
        <div className="flex flex-col gap-2">
            <div>
                <h3 className="text-lg font-bold">✅ Pros</h3>
                <ul className="text-sm pl-8 list-disc">
                    {pros.length > 0 ? pros.map((p, i) => <li key={i}>{p}</li>) : <li>None</li>}
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-bold">❌ Cons</h3>
                <ul className="text-sm pl-8 list-disc">
                    {cons.length > 0 ? cons.map((c, i) => <li key={i}>{c}</li>) : <li>None</li>}
                </ul>
            </div>
        </div>
    );
}