export function AgreementPage() {
  return (
    <div className="flex flex-col w-full pb-24">
      <div className="pt-24 pb-12 px-4 border-b border-border bg-card">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-3">Scale Surge</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Client Services Agreement</h1>
          <p className="text-muted-foreground">Free Trial and Monthly Subscription · Version 1 – 21/06/2026</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="prose prose-invert prose-sm max-w-none space-y-10 text-foreground leading-relaxed">

          <p className="text-muted-foreground">
            This Agreement sets out the terms on which Scale Surge (the "Provider", "we", "us") provides its automated messaging service to the business named below (the "Client", "you"). It applies to both the free trial and any paid subscription. Please read it carefully. By signing this Agreement, or by activating or using the Service, you agree to be bound by these terms.
          </p>

          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border">Parties</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Provider:</strong> Scale Surge — SCALE SURGE LIMITED, a company registered in England and Wales under company number 03330540266, whose registered office is at 1 Southwinds, Old Stoke Road, Stoke Charity, Winchester, Hampshire, SO21 3PJ; contact email henrylucas@scalesurge.co.uk.</p>
              <p><strong className="text-foreground">Client:</strong> the business that accepts this Agreement. The Client's identifying details — including the name of the individual accepting on the Client's behalf, the business name, the business telephone number and the contact email — are those the Client provides through the Provider's onboarding and sign-up process, which details form part of this Agreement.</p>
              <p><strong className="text-foreground">Effective Date:</strong> the date the Client accepts this Agreement (by any method described in clause 18) or the date the Service is first activated for the Client, whichever is earlier.</p>
            </div>
          </section>

          <Section title="1. Definitions">
            <p>In this Agreement, the following words have the following meanings:</p>
            <Defs items={[
              ['"Service"', 'means the Missed-Call Service and the Review Service described in clause 2, together with any related software, systems and messaging operated by the Provider.'],
              ['"Missed-Call Service"', 'means the automated missed-call text-back functionality described in clause 2.1.'],
              ['"Review Service"', 'means the automated review-request functionality described in clause 2.2.'],
              ['"Lead"', 'means a person who calls the Client\'s business telephone number and whose call is not answered.'],
              ['"Customer Number"', 'means a telephone number that the Client submits to the Service in order to send a review request.'],
              ['"Twilio Number"', 'means the dedicated telephone number provisioned by the Provider (via Twilio) for use with the Client\'s Service.'],
              ['"Client Content"', 'means the message wording, templates, business name, review link and any other content supplied or specified by the Client to be sent through the Service.'],
              ['"Free Trial"', 'means the trial period described in clause 3.'],
              ['"Subscription"', 'means a paid monthly subscription to the Service taken out under clause 4.'],
              ['"Fees"', 'means the subscription charges payable under clauses 4 and 5.'],
              ['"Data Protection Legislation"', 'means the UK GDPR, the Data Protection Act 2018, and the Privacy and Electronic Communications Regulations 2003 (PECR), and any successor or replacement legislation, in each case as amended from time to time.'],
              ['"Controller", "Processor", "Data Subject", "Personal Data" and "processing"', 'have the meanings given to them in the Data Protection Legislation.'],
            ]} />
          </Section>

          <Section title="2. The Service">
            <Clause n="2.1" title="Missed-Call Service.">
              Where a Lead calls the Client's business telephone number and the call is not answered, the Service automatically sends the Lead a text message (using the Client Content) apologising for the missed call and inviting the Lead to reply by message. If the Lead replies, that reply is forwarded to the Client, who can then respond directly to the Lead using the Lead's own number. If the Lead does not reply, the Service may send one follow-up message after approximately two hours. All missed calls and related data (including Lead responses and timestamps) are logged by the Service.
            </Clause>
            <Clause n="2.2" title="Review Service.">
              The Review Service is intended for use only with the Client's own existing customers. Where the Client sends a Customer Number to the Twilio Number, the Service automatically sends that number a single message (using the Client Content) requesting a review of the Client's business and containing a link to the relevant review page. Each review message identifies the Client's business as the sender and includes an opt-out (STOP) instruction. The Service will not send a review request to any number that has previously opted out.
            </Clause>
            <Clause n="2.3" title="Opt-out (STOP).">
              Any recipient may opt out of automated messages at any time by replying "STOP". A recipient who has opted out will be suppressed and will not receive any further automated messages through the Service, including review requests. The Client must not attempt to circumvent, override or re-enable messaging to any recipient who has opted out.
            </Clause>
            <Clause n="2.4" title="Blacklisting.">
              The Client may prevent specified numbers from receiving automated messages by issuing the relevant commands to the Twilio Number, as notified by the Provider from time to time.
            </Clause>
            <Clause n="2.5" title="Client Content.">
              The Client is responsible for providing and approving the content of all messages sent through the Service. The Service sends the Client Content as supplied; the Provider does not author message content on the Client's behalf.
            </Clause>
            <Clause n="2.6" title="Changes to the Service.">
              The Provider may modify, improve, add to or remove features of the Service from time to time, provided that it does not materially reduce the core functionality during a paid Subscription period without notice.
            </Clause>
          </Section>

          <Section title="3. Free Trial">
            <Clause n="3.1">The Free Trial runs for 30 days from the Effective Date, unless ended earlier under this Agreement.</Clause>
            <Clause n="3.2">No Fees are payable during the Free Trial and no payment details are required to begin it.</Clause>
            <Clause n="3.3" title="No automatic conversion.">The Free Trial does not convert automatically into a paid Subscription. No payment will be taken at the end of the Free Trial. The Client does not need to cancel or opt out during the Free Trial; the Service will simply end unless the Client chooses to continue under clause 4.</Clause>
            <Clause n="3.4">At the end of the Free Trial, the Provider may suspend or deactivate the Service unless the Client has taken out a Subscription.</Clause>
          </Section>

          <Section title="4. Paid Subscription">
            <Clause n="4.1">If the Client wishes to continue using the Service after the Free Trial, the Client may take out a monthly Subscription by completing payment via the Stripe payment link provided by the Provider.</Clause>
            <Clause n="4.2">The Subscription fee is £49 per month, plus VAT where applicable.</Clause>
            <Clause n="4.3" title="Recurring payment.">Once the Client takes out a Subscription, the monthly Fee is charged automatically in advance on a recurring basis until the Subscription is cancelled. By taking out the Subscription the Client authorises these recurring charges.</Clause>
            <Clause n="4.4" title="Cancellation.">The Client may cancel the Subscription at any time by cancelling via Stripe, or notifying the Provider by email at henrylucas@scalesurge.co.uk. Cancellation takes effect at the end of the then-current paid month. The Service continues until the end of that paid period. Fees already paid are non-refundable and the Provider does not refund part-months.</Clause>
            <Clause n="4.5" title="Price changes.">The Provider may change the Subscription fee on at least 30 days' written notice (by email). If the Client does not wish to accept the new fee, the Client may cancel before it takes effect.</Clause>
          </Section>

          <Section title="5. Fees and Payment">
            <Clause n="5.1">All payments are processed through Stripe. The Provider does not collect or store the Client's card details; these are handled by Stripe under its own terms.</Clause>
            <Clause n="5.2">All Fees are stated exclusive of VAT. VAT will be added at the prevailing rate where the Provider is required to charge it.</Clause>
            <Clause n="5.3">If a recurring payment fails, the Provider may suspend the Service until payment is received and may terminate the Subscription if payment is not made within a reasonable period.</Clause>
          </Section>

          <Section title="6. Client Obligations and Acceptable Use">
            <Clause n="6.1">The Client must provide accurate and up-to-date details, including its name, business name and business telephone number, and must keep them up to date.</Clause>
            <Clause n="6.2" title="Lawful basis (Review Service).">The Client warrants that every number submitted to the Review Service belongs to one of the Client's own customers and that the Client is entitled to contact them. The Client must not submit numbers of people who have opted out or who have no prior relationship with the Client's business. The Client is solely responsible for ensuring its use of the Review Service complies with applicable law, including PECR.</Clause>
            <Clause n="6.3">The Client must comply with all laws applicable to its use of the Service, including the Data Protection Legislation and all rules governing electronic marketing and direct messaging.</Clause>
            <Clause n="6.4">The Client must not use the Service to send messages that are unlawful, misleading, deceptive, defamatory, harassing, abusive, offensive, or that constitute spam or bulk unsolicited messaging.</Clause>
            <Clause n="6.5">The Client must not submit any Customer Number, or request any message to be sent, to any person who has opted out (replied STOP) or been blacklisted.</Clause>
            <Clause n="6.6">The Client is solely responsible for the Client Content and for the accuracy of any review link it supplies.</Clause>
            <Clause n="6.7">The Client must keep its access to the Service and the Twilio Number secure and must not allow unauthorised use.</Clause>
          </Section>

          <Section title="7. Message Content">
            <Clause n="7.1">The Client supplies and is responsible for all Client Content. The Provider acts on the Client's instructions in sending it.</Clause>
            <Clause n="7.2">The Provider is not obliged to monitor or review Client Content, but may, acting reasonably, decline to send, suspend or remove any content that it considers to be unlawful, non-compliant, misleading, offensive or otherwise in breach of this Agreement.</Clause>
            <Clause n="7.3">The Provider is not liable for any Client Content or for the consequences of sending it.</Clause>
          </Section>

          <Section title="8. No Guarantee of Results">
            <Clause n="8.1">The Provider's aim is to help the Client respond to leads more quickly and to gather more reviews. However, the Provider does not guarantee any particular outcome.</Clause>
            <Clause n="8.2">The Client acknowledges that the Provider makes no representation, warranty or guarantee that the Service will increase, or prevent any reduction in, the Client's leads, enquiries, customers, reviews or revenue. Results depend on many factors outside the Provider's control.</Clause>
          </Section>

          <Section title="9. Service Availability">
            <Clause n="9.1">The Service is provided on an "as is" and "as available" basis. The Provider does not guarantee that the Service will be uninterrupted, error-free or available at any particular time, and gives no uptime or service-level guarantee.</Clause>
            <Clause n="9.2">The Service relies on third-party providers (including Twilio for messaging and call forwarding, and hosting and database providers). Interruptions, delays, message failures or outages caused by those providers, by the mobile networks, or by other matters outside the Provider's reasonable control are not the Provider's responsibility.</Clause>
            <Clause n="9.3">The Provider may suspend the Service temporarily for maintenance, upgrades or to address a security or technical issue, and will use reasonable efforts to limit disruption.</Clause>
          </Section>

          <Section title="10. Data Protection">
            <Clause n="10.1">In relation to the Personal Data processed through the Service (including the telephone numbers and message content of Leads and customers), the Client is the Controller and the Provider is the Processor.</Clause>
            <Clause n="10.2">Each party shall comply with its obligations under the Data Protection Legislation. The data processing terms in Schedule 1 (Data Processing Agreement) apply to and form part of this Agreement.</Clause>
          </Section>

          <Section title="11. Intellectual Property">
            <Clause n="11.1">All intellectual property rights in the Service, including the software, systems, code and configuration operated by the Provider, are and remain the property of the Provider (or its licensors).</Clause>
            <Clause n="11.2">The Provider grants the Client a non-exclusive, non-transferable licence to use the Service for its own business during the term of this Agreement.</Clause>
            <Clause n="11.3">As between the parties, the Client owns its own Client Content and its own business data.</Clause>
          </Section>

          <Section title="12. Confidentiality">
            <Clause n="12.1">Each party shall keep confidential any non-public information disclosed by the other in connection with this Agreement and use it only for the purposes of this Agreement, except where disclosure is required by law or to its professional advisers.</Clause>
          </Section>

          <Section title="13. Limitation of Liability">
            <Clause n="13.1">Nothing in this Agreement limits or excludes the Provider's liability for: (a) death or personal injury caused by its negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot lawfully be limited or excluded.</Clause>
            <Clause n="13.2">Subject to clause 13.1, the Provider shall not be liable, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any: loss of profits; loss of business, revenue or anticipated savings; loss of goodwill; loss of or damage to data; loss of leads, enquiries, customers or reviews; or any indirect or consequential loss.</Clause>
            <Clause n="13.3">Subject to clause 13.1, the Provider's total aggregate liability arising out of or in connection with this Agreement shall not exceed the greater of: (a) the total Fees paid by the Client in the 12 months immediately preceding the event giving rise to the claim; and (b) one hundred pounds (£100).</Clause>
          </Section>

          <Section title="14. Indemnity">
            <Clause n="14.1">The Client shall indemnify and keep indemnified the Provider against all liabilities, costs, expenses, damages, losses, claims, fines and penalties (including reasonable legal fees and any penalty imposed by a regulator, including the Information Commissioner's Office) suffered or incurred by the Provider arising out of or in connection with:</Clause>
            <ul className="list-[lower-alpha] list-inside space-y-1 text-muted-foreground pl-4">
              <li>the Client Content;</li>
              <li>any breach by the Client of clause 6 (Client Obligations and Acceptable Use);</li>
              <li>the Client's lack of a lawful basis or consent to contact any Lead or any Customer Number; and</li>
              <li>any breach by the Client of the Data Protection Legislation.</li>
            </ul>
          </Section>

          <Section title="15. Term and Termination">
            <Clause n="15.1">This Agreement starts on the Effective Date and continues during the Free Trial and any subsequent Subscription, until terminated in accordance with this clause.</Clause>
            <Clause n="15.2">The Client may end the Free Trial at any time, and may cancel a Subscription in accordance with clause 4.4.</Clause>
            <Clause n="15.3">Either party may terminate this Agreement on 30 days' written notice (by email).</Clause>
            <Clause n="15.4">The Provider may terminate or suspend the Service immediately on written notice if the Client: (a) materially breaches this Agreement (including clause 6) and, where capable of remedy, fails to remedy it within a reasonable period; (b) fails to pay Fees when due; (c) misuses the Service; or (d) becomes insolvent or ceases to trade.</Clause>
            <Clause n="15.5">On termination, the Client's right to use the Service ends, the Twilio Number may cease to operate and may not be transferable to the Client, and the Provider will deal with Personal Data in accordance with Schedule 1.</Clause>
            <Clause n="15.6">Clauses that by their nature should survive termination (including clauses 8, 11, 12, 13, 14 and 16) continue in force.</Clause>
          </Section>

          <Section title="16. Communications and Notices">
            <Clause n="16.1">The Provider will contact the Client by email (using the contact email provided) for service-related matters, including updates, changes, notices and information about the Service. The Client consents to receiving such service communications.</Clause>
            <Clause n="16.2">Notices under this Agreement may be given by email to the addresses stated for each party and are deemed received on the next business day after sending.</Clause>
          </Section>

          <Section title="17. General">
            <Clause n="17.1" title="Variation.">The Provider may update the terms of this Agreement from time to time and will notify the Client of material changes by email. Continued use of the Service after the changes take effect constitutes acceptance.</Clause>
            <Clause n="17.2" title="Entire agreement.">This Agreement (including its Schedule) is the entire agreement between the parties relating to the Service and supersedes any prior discussions.</Clause>
            <Clause n="17.3" title="No partnership.">Nothing in this Agreement creates a partnership, agency or employment relationship between the parties.</Clause>
            <Clause n="17.4" title="Assignment.">The Provider may assign or transfer this Agreement. The Client may not do so without the Provider's prior written consent.</Clause>
            <Clause n="17.5" title="Severance.">If any provision is found to be invalid or unenforceable, the remaining provisions continue in force.</Clause>
            <Clause n="17.6" title="Third parties.">A person who is not a party to this Agreement has no rights under the Contracts (Rights of Third Parties) Act 1999 to enforce it.</Clause>
            <Clause n="17.7" title="Force majeure.">Neither party is liable for failure or delay caused by events beyond its reasonable control.</Clause>
            <Clause n="17.8" title="Governing law and jurisdiction.">This Agreement is governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction.</Clause>
          </Section>

          <Section title="18. Acceptance">
            <Clause n="18.1">This Agreement is accepted electronically. The Client accepts it by ticking the acceptance box, completing the Provider's onboarding or sign-up form, clicking to confirm acceptance via the trial or payment sign-up link, or by activating or using the Service — whichever happens first. No physical signature is required.</Clause>
            <Clause n="18.2">By accepting, the Client confirms that the person accepting is authorised to enter into this Agreement on behalf of the business, and that the Client has read, understood and agreed to this Agreement, including Schedule 1.</Clause>
            <Clause n="18.3">The Provider will keep an electronic record of the Client's acceptance, including the details the Client submitted and the date and time of acceptance. That record is evidence of the Client's agreement to this Agreement.</Clause>
          </Section>

          <div className="border-t border-border pt-10">
            <h2 className="text-xl font-bold mb-6">Schedule 1 — Data Processing Agreement</h2>
            <p className="text-muted-foreground mb-6">This Schedule forms part of the Agreement and applies where the Provider processes Personal Data on behalf of the Client in connection with the Service. In this Schedule the Client is the Controller and the Provider is the Processor.</p>

            <div className="space-y-6">
              <ScheduleItem letter="A" title="Subject matter and duration">
                The Provider processes Personal Data on the Client's behalf for the purpose of providing the Service, for the duration of the Agreement and for the limited period afterwards needed to delete or return data under paragraph F.
              </ScheduleItem>
              <ScheduleItem letter="B" title="Nature and purpose of processing">
                Receiving and logging missed-call data; sending automated text messages to Leads and customers; receiving and forwarding replies; sending follow-up and review-request messages; recording opt-outs and blacklist entries; and storing related records and timestamps.
              </ScheduleItem>
              <ScheduleItem letter="C" title="Types of Personal Data">
                Telephone numbers of Leads and customers; the content of SMS messages sent and received; dates and times of calls, messages and responses; and opt-out / blacklist status.
              </ScheduleItem>
              <ScheduleItem letter="D" title="Categories of Data Subjects">
                The Client's callers, leads and customers.
              </ScheduleItem>
              <ScheduleItem letter="E" title="Processor obligations">
                <p className="mb-3">The Provider shall:</p>
                <ul className="list-[lower-alpha] list-inside space-y-2 pl-2">
                  <li>process the Personal Data only on the Client's documented instructions (including those set out in the Agreement), unless required to do otherwise by law;</li>
                  <li>ensure that persons authorised to process the Personal Data are bound by confidentiality;</li>
                  <li>implement appropriate technical and organisational measures to protect the Personal Data against unauthorised or unlawful processing and against accidental loss, destruction or damage;</li>
                  <li>assist the Client, so far as reasonably possible, in responding to Data Subject requests and in meeting its obligations regarding security, breach notification and consultation with the regulator;</li>
                  <li>notify the Client without undue delay on becoming aware of a personal data breach affecting the Client's Personal Data; and</li>
                  <li>make available information reasonably necessary to demonstrate compliance with this Schedule.</li>
                </ul>
              </ScheduleItem>
              <ScheduleItem letter="F" title="Deletion and return">
                On termination of the Agreement, the Provider shall, at the Client's choice, delete or return the Personal Data, and delete existing copies, unless legally required to retain them. Where the Client makes no election within a reasonable period, the Provider may delete the Personal Data.
              </ScheduleItem>
              <ScheduleItem letter="G" title="Sub-processors">
                The Client authorises the Provider to engage the following sub-processors to provide the Service: Twilio (messaging and call forwarding); the Provider's hosting provider (currently Railway); and the Provider's database provider (currently Neon / PostgreSQL). The Provider remains responsible for its sub-processors' performance and will inform the Client of any intended material change, giving the Client the opportunity to object.
              </ScheduleItem>
              <ScheduleItem letter="H" title="International transfers">
                Where Personal Data is transferred outside the UK by a sub-processor, the Provider shall ensure an appropriate transfer mechanism recognised under the Data Protection Legislation (such as the UK International Data Transfer Agreement or Addendum) is in place.
              </ScheduleItem>
              <ScheduleItem letter="I" title="Controller responsibilities">
                The Client, as Controller, is responsible for ensuring it has a lawful basis and any necessary consents for the processing carried out through the Service, including for contacting Leads and the holders of Customer Numbers, and for providing any required privacy information to Data Subjects.
              </ScheduleItem>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Clause({ n, title, children }: { n: string; title?: string; children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground">
      <span className="font-semibold text-foreground">{n}</span>
      {title && <span className="font-semibold text-foreground"> {title}</span>}
      {" "}{children}
    </p>
  );
}

function Defs({ items }: { items: [string, string][] }) {
  return (
    <div className="space-y-2">
      {items.map(([term, def], i) => (
        <p key={i} className="text-muted-foreground">
          <span className="font-semibold text-foreground">{term}</span> {def}
        </p>
      ))}
    </div>
  );
}

function ScheduleItem({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-semibold text-foreground mb-2">{letter}. {title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
