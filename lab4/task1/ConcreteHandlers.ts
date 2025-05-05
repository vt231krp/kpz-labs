import { AbstractHandler } from "./Handler";

export class TechnicalSupportHandler extends AbstractHandler {
  public handle(issue: string): string | null {
    if (
      issue.includes("technical") ||
      issue.includes("device") ||
      issue.includes("not working")
    ) {
      return "Technical Support: We will help you solve your technical problem!";
    }
    return super.handle(issue);
  }
}

export class BillingHandler extends AbstractHandler {
  public handle(issue: string): string | null {
    if (
      issue.includes("bill") ||
      issue.includes("payment") ||
      issue.includes("charge")
    ) {
      return "Billing Department: We will help you with your billing inquiry!";
    }
    return super.handle(issue);
  }
}

export class AccountHandler extends AbstractHandler {
  public handle(issue: string): string | null {
    if (
      issue.includes("account") ||
      issue.includes("login") ||
      issue.includes("password")
    ) {
      return "Account Management: We will help you with your account!";
    }
    return super.handle(issue);
  }
}

export class GeneralInquiryHandler extends AbstractHandler {
  public handle(issue: string): string | null {
    if (
      issue.includes("information") ||
      issue.includes("question") ||
      issue.includes("inquiry")
    ) {
      return "General Information: We will answer your general questions!";
    }
    return super.handle(issue);
  }
}
